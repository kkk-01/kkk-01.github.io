document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // FAQ 아코디언
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const toggle = item.querySelector('.faq-toggle');
    const panel = item.querySelector('.faq-panel');
    if (!toggle || !panel) return;
    panel.style.maxHeight = '0px';
    toggle.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : '0px';
    });
  });
});
