/* ===== Reset & Base ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #e0e0e0;
  background-color: #0d0d0d;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Starry background */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 50px 160px, rgba(255, 255, 255, 0.35), transparent),
    radial-gradient(2px 2px at 90px 40px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.25), transparent),
    radial-gradient(2px 2px at 160px 120px, rgba(255, 255, 255, 0.35), transparent),
    radial-gradient(2px 2px at 200px 50px, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(2px 2px at 250px 180px, rgba(255, 255, 255, 0.25), transparent);
  background-size: 300px 220px;
  background-repeat: repeat;
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
}

/* Subtle gradient overlay */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: radial-gradient(
    ellipse 80% 50% at 50% 0%,
    rgba(230, 111, 81, 0.06),
    transparent 60%
  );
  pointer-events: none;
  z-index: 0;
}

/* ===== Layout ===== */
.hero,
main,
.footer {
  position: relative;
  z-index: 1;
}

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

/* ===== Hero ===== */
.hero {
  text-align: center;
  padding: 4rem 1.5rem 5rem;
}

.hero__logo {
  width: 140px;
  height: auto;
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.hero__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.25rem;
  letter-spacing: -0.02em;
}

.hero__subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  font-weight: 500;
  color: #E76F51;
  margin: 0 0 1rem;
}

.hero__description {
  font-size: 1.1rem;
  color: #999;
  max-width: 480px;
  margin: 0 auto 1.5rem;
}

.hero__cta {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #E76F51;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border-radius: 999px;
  transition: background 0.2s, transform 0.15s;
}

.hero__cta:hover {
  background: #f08060;
  transform: translateY(-1px);
}

/* ===== Section Headings ===== */
.section-heading {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chevron {
  color: #E76F51;
  font-size: 1.2em;
}

/* ===== Value Props ===== */
.value-props {
  margin-bottom: 4rem;
}

.value-props__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.card {
  background: #1a1a1a;
  border-radius: 14px;
  padding: 1.75rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.card__icon {
  width: 48px;
  height: 48px;
  background: #E76F51;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.card__icon svg {
  width: 24px;
  height: 24px;
  color: #fff;
}

.card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem;
}

.card__description {
  font-size: 0.95rem;
  color: #999;
  margin: 0;
  line-height: 1.5;
}

/* ===== Tagline Block ===== */
.tagline-block {
  text-align: center;
  padding: 3rem 1.5rem;
  margin-bottom: 4rem;
}

.tagline-block__title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem;
}

.tagline-block__subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  color: #48C9B0;
  margin: 0;
}

/* ===== Resources ===== */
.resources {
  margin-bottom: 4rem;
}

.resources__grid {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 320px;
  gap: 1rem;
  margin-bottom: 2rem;
}

.resource-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: #1a1a1a;
  border-radius: 12px;
  color: #e0e0e0;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
}

.resource-card:hover {
  background: #222;
  transform: translateY(-2px);
}

.resource-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.resource-card__icon svg {
  width: 22px;
  height: 22px;
  color: #E76F51;
}

.resource-card__text {
  flex: 1;
  font-weight: 500;
}

.resource-card__arrow {
  color: #E76F51;
  font-weight: 600;
}

.contract-address {
  max-width: 520px;
}

.contract-address__label {
  display: block;
  font-size: 0.875rem;
  color: #999;
  margin-bottom: 0.5rem;
}

.contract-address__wrap {
  display: flex;
  gap: 0.5rem;
}

.contract-address__input {
  flex: 1;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 10px;
  color: #e0e0e0;
  font-family: monospace;
  font-size: 0.875rem;
}

.contract-address__input:focus {
  outline: none;
  border-color: #E76F51;
}

.contract-address__copy {
  padding: 0.75rem 1.25rem;
  background: #E76F51;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.contract-address__copy:hover {
  background: #f08060;
}

.contract-address__copy.copied {
  background: #48C9B0;
}

/* ===== Newsletter ===== */
.newsletter {
  margin-bottom: 4rem;
}

.newsletter__description {
  color: #999;
  margin: 0 0 1.25rem;
  max-width: 420px;
}

.newsletter__form {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 400px;
}

.newsletter__input {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 10px;
  color: #e0e0e0;
  font-size: 1rem;
}

.newsletter__input::placeholder {
  color: #666;
}

.newsletter__input:focus {
  outline: none;
  border-color: #E76F51;
}

.newsletter__submit {
  padding: 0.75rem 1.5rem;
  background: #E76F51;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.newsletter__submit:hover {
  background: #f08060;
}

/* ===== Footer ===== */
.footer {
  text-align: center;
  padding: 2.5rem 1.5rem;
  border-top: 1px solid #222;
}

.footer__nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.footer__nav a {
  color: #999;
  text-decoration: none;
  font-size: 0.95rem;
}

.footer__nav a:hover {
  color: #E76F51;
}

.footer__copyright {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 0.5rem;
}

.footer__legal {
  font-size: 0.85rem;
}

.footer__legal a {
  color: #666;
  text-decoration: none;
}

.footer__legal a:hover {
  color: #999;
}

/* ===== Coming Soon Modal ===== */
.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.25s, opacity 0.25s;
}

.modal.is-open {
  visibility: visible;
  opacity: 1;
}

.modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  cursor: pointer;
}

.modal__box {
  position: relative;
  background: linear-gradient(145deg, #1a1a1a 0%, #141414 100%);
  border: 1px solid #333;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 360px;
  width: 100%;
  text-align: center;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
  transform: scale(0.9);
  transition: transform 0.25s ease;
}

.modal.is-open .modal__box {
  transform: scale(1);
}

.modal__icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

#newsletter-success-modal .modal__icon {
  color: #48C9B0;
  font-size: 2.5rem;
  font-weight: bold;
}

.modal__title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.75rem;
}

.modal__text {
  font-size: 1rem;
  color: #999;
  margin: 0 0 1rem;
  line-height: 1.5;
}

.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 36px;
  height: 36px;
  padding: 0;
  background: transparent;
  border: none;
  color: #666;
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.modal__close:hover {
  color: #E76F51;
  background: rgba(231, 111, 81, 0.1);
}

/* ===== Animations (fade-in on scroll) ===== */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .value-props__grid {
    grid-template-columns: 1fr;
  }

  .contract-address__wrap {
    flex-direction: column;
  }
}

@media (max-width: 500px) {
  .newsletter__form {
    flex-direction: column;
  }

  .newsletter__input {
    min-width: 100%;
  }
}
