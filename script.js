/* SenSys Aéro — interactions minimales */

// Menu mobile : ouvre/ferme la navigation
(function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Ferme le menu après un clic sur un lien (mobile)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Hero : fondu + léger zoom-out au scroll (même effet que bluzetech.com)
(function () {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  var ticking = false;

  function update() {
    ticking = false;
    var progress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
    var opacity = Math.min(Math.max(1 - progress / 0.6, 0), 1);
    var scale = 1 - 0.03 * progress;
    hero.style.opacity = opacity;
    hero.style.transform = 'scale(' + scale + ')';
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

// Formulaire : envoi par courriel via Web3Forms (AJAX, sans rechargement de page).
(function () {
  var forms = document.querySelectorAll('[data-contact-form]');
  if (!forms.length) return;

  forms.forEach(function (form) {
    var button = form.querySelector('button[type="submit"]');
    var msg = form.querySelector('[data-form-msg]');
    var buttonLabel = button ? button.textContent : '';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot : si rempli, on abandonne silencieusement (probable robot).
      var honeypot = form.querySelector('input[name="botcheck"]');
      if (honeypot && honeypot.checked) return;

      if (button) {
        button.disabled = true;
        button.textContent = 'Envoi en cours…';
      }
      if (msg) {
        msg.textContent = '';
        msg.classList.remove('form-msg--ok', 'form-msg--error');
      }

      fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            if (msg) {
              msg.textContent = 'Merci ! Votre message a bien été envoyé, nous vous répondrons rapidement.';
              msg.classList.add('form-msg--ok');
            }
          } else {
            throw new Error(data.message || 'Erreur inconnue');
          }
        })
        .catch(function () {
          if (msg) {
            msg.textContent = 'Une erreur est survenue. Vous pouvez nous écrire directement à service@bluzetech.com.';
            msg.classList.add('form-msg--error');
          }
        })
        .finally(function () {
          if (button) {
            button.disabled = false;
            button.textContent = buttonLabel;
          }
        });
    });
  });
})();
