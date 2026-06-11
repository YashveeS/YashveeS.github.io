const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const year = document.querySelector('[data-year]');
const copyButton = document.querySelector('[data-copy-email]');
const revealItems = document.querySelectorAll('.reveal');

year.textContent = new Date().getFullYear();

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

copyButton.addEventListener('click', async () => {
  const email = copyButton.dataset.copyEmail;
  try {
    await navigator.clipboard.writeText(email);
    const original = copyButton.textContent;
    copyButton.textContent = 'Email copied';
    setTimeout(() => {
      copyButton.textContent = original;
    }, 1700);
  } catch (error) {
    window.location.href = `mailto:${email}`;
  }
});
