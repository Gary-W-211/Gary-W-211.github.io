document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // 1) remove .active from all sections
      sections.forEach(sec => sec.classList.remove('active'));

      // 2) read the hash, e.g. "#resume" → "resume"
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
        // 3) update URL (optional)
        history.replaceState(null, '', `#${targetId}`);
      }
    });
  });
});
