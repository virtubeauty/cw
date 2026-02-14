(function () {
  'use strict';

  // ===== Copy to clipboard =====
  function initCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-copy-target');
        var input = document.getElementById(targetId);

        if (!input) return;

        input.select();
        input.setSelectionRange(0, 99999);

        try {
          navigator.clipboard.writeText(input.value).then(function () {
            var originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.classList.add('copied');

            setTimeout(function () {
              btn.textContent = originalText;
              btn.classList.remove('copied');
            }, 2000);
          });
        } catch (err) {
          // Fallback for older browsers
          document.execCommand('copy');
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        }
      });
    });
  }

  // ===== Scroll-triggered fade-in =====
  function initScrollAnimations() {
    var fadeElements = document.querySelectorAll('.fade-in');
    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(function (el) {
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  // ===== Coming Soon modal =====
  function initComingSoonModal() {
    var modal = document.getElementById('coming-soon-modal');
    var triggers = document.querySelectorAll('.js-coming-soon');
    var closeBtn = modal && modal.querySelector('.modal__close');
    var backdrop = modal && modal.querySelector('.modal__backdrop');

    function openModal() {
      if (modal) {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }

    triggers.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var openModalEl = document.querySelector('.modal.is-open');
        if (openModalEl) {
          openModalEl.classList.remove('is-open');
          openModalEl.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      }
    });
  }

  // ===== Newsletter form =====
  function initNewsletterForm() {
    var form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailInput = form.querySelector('input[name="email"]');
      var email = emailInput && emailInput.value ? emailInput.value.trim() : '';

      if (!email) {
        if (emailInput) emailInput.focus();
        return;
      }

      // Placeholder: in production, this would submit to an API
      console.log('Newsletter signup:', email);

      var successModal = document.getElementById('newsletter-success-modal');
      if (successModal) {
        successModal.classList.add('is-open');
        successModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        function closeSuccessModal() {
          successModal.classList.remove('is-open');
          successModal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
        successModal.querySelector('.modal__backdrop').onclick = closeSuccessModal;
        successModal.querySelector('.modal__close').onclick = closeSuccessModal;
      }

      if (emailInput) emailInput.value = '';
    });
  }

  // ===== Init on DOM ready =====
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  function run() {
    initCopyButtons();
    initScrollAnimations();
    initComingSoonModal();
    initNewsletterForm();
  }
})();
