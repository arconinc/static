(function () {
  function serialize(formEl) {
    var data = {};
    var els = formEl.querySelectorAll('input, select, textarea');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!el.name || el.disabled) continue;
      if (el.type === 'submit') continue;
      data[el.name] = el.value;
    }
    return data;
  }

  window.ArcForm = {
    submit: function (formEl, options) {
      var payload = Object.assign({ title: options.title, source: options.source }, serialize(formEl));
      return fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (res.ok) return { ok: true };
          return res.json().catch(function () { return {}; }).then(function (body) {
            return { ok: false, error: body.error || 'Submission failed' };
          });
        })
        .catch(function () {
          return { ok: false, error: 'Network error' };
        });
    },
  };
})();
