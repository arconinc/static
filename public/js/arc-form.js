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

  function initForm(form) {
    var submitBtn = form.querySelector('input[type="submit"]');
    var responseEl = form.querySelector('.wpcf7-response-output');
    var origLabel = submitBtn ? submitBtn.value : 'SEND IT';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.value = 'Sending…';
      }
      if (responseEl) {
        responseEl.textContent = '';
        responseEl.style.display = 'none';
      }

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serialize(form)),
      })
        .then(function (res) {
          if (res.ok) {
            form.style.display = 'none';
            var msg = document.createElement('p');
            msg.textContent = "Thank you! We’ll be in touch soon.";
            msg.style.cssText = 'font-size:1.2em;margin-top:1em;';
            form.parentNode.insertBefore(msg, form.nextSibling);
          } else {
            if (responseEl) {
              responseEl.textContent = 'Something went wrong. Please try again or email us directly.';
              responseEl.style.display = 'block';
            }
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.value = origLabel;
            }
          }
        })
        .catch(function () {
          if (responseEl) {
            responseEl.textContent = 'Something went wrong. Please try again or email us directly.';
            responseEl.style.display = 'block';
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.value = origLabel;
          }
        });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.wpcf7-form').forEach(initForm);
  });
})();
