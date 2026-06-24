(function () {
  "use strict";

  function getSliderPayload(id) {
    var sliders = (window.SR7 && window.SR7.JSON) || {};

    for (var key in sliders) {
      if (!Object.prototype.hasOwnProperty.call(sliders, key)) continue;

      var slider = sliders[key];
      var module = document.getElementById(key);
      var dbId = String(slider && slider.id ? slider.id : "");
      var moduleDbId = String(module && module.dataset ? module.dataset.id : "");

      if (key === id || dbId === id || moduleDbId === id) {
        return slider;
      }
    }

    return null;
  }

  function buildResponse(url) {
    var match = url.pathname.match(/\/wp-json\/sliderrevolution\/sliders\/([^/]+)/);
    if (!match) return null;

    var slider = getSliderPayload(decodeURIComponent(match[1]));
    if (!slider) return { success: false, slides: {} };

    var slideId = url.searchParams.get("slideid");
    if (slideId) {
      return {
        success: true,
        id: slider.id,
        alias: slider.settings && slider.settings.alias,
        slides: slider.slides && slider.slides[slideId] ? (function () {
          var slides = {};
          slides[slideId] = slider.slides[slideId];
          return slides;
        })() : {}
      };
    }

    var clone = {};
    for (var prop in slider) {
      if (Object.prototype.hasOwnProperty.call(slider, prop)) {
        clone[prop] = slider[prop];
      }
    }
    clone.success = true;
    return clone;
  }

  function buildResponseFromRequest(request) {
    if (!request || request.action !== "get_full_slider_object") return null;

    var id = request.id || request.alias || "";
    var slider = getSliderPayload(String(id).replace(/^SR7_/, "").replace(/_\d+$/, ""));
    if (!slider && request.alias) slider = getSliderPayload(String(request.alias));
    if (!slider) return null;

    if (request.slideid) {
      var slides = {};
      if (slider.slides && slider.slides[request.slideid]) {
        slides[request.slideid] = slider.slides[request.slideid];
      }

      return {
        success: true,
        id: slider.id,
        alias: slider.settings && slider.settings.alias,
        slides: slides
      };
    }

    var clone = {};
    for (var prop in slider) {
      if (Object.prototype.hasOwnProperty.call(slider, prop)) {
        clone[prop] = slider[prop];
      }
    }
    clone.success = true;
    return clone;
  }

  function installRestApiWrapper() {
    if (!window._tpt || !window._tpt.restAPILoad || window._tpt.restAPILoad.__simplyStaticWrapped) {
      return false;
    }

    var nativeRestAPILoad = window._tpt.restAPILoad.bind(window._tpt);

    window._tpt.restAPILoad = function (request) {
      var payload = buildResponseFromRequest(request);

      if (payload) {
        return Promise.resolve(JSON.stringify(payload));
      }

      return nativeRestAPILoad(request);
    };
    window._tpt.restAPILoad.__simplyStaticWrapped = true;
    return true;
  }

  if (!installRestApiWrapper()) {
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;
      if (installRestApiWrapper() || attempts > 200) {
        window.clearInterval(timer);
      }
    }, 25);
  }

  if (window.fetch) {
    var nativeFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      var requestUrl = typeof input === "string" ? input : input && input.url;

      try {
        var url = new URL(requestUrl, window.location.href);
        var payload = buildResponse(url);

        if (payload) {
          return Promise.resolve(new Response(JSON.stringify(payload), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          }));
        }
      } catch (error) {
        // Fall back to the browser's normal fetch handling.
      }

      return nativeFetch(input, init);
    };
  }

  if (window.jQuery && window.jQuery.ajaxPrefilter) {
    window.jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {
      try {
        var url = new URL(options.url, window.location.href);
        var payload = buildResponse(url);

        if (!payload) return;

        options.url = "data:application/json," + encodeURIComponent(JSON.stringify(payload));
        options.type = "GET";
        options.method = "GET";
      } catch (error) {
        // Let jQuery continue with the original request.
      }
    });
  }
})();
