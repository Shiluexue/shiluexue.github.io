/* =====================================
   Shilue's Portfolio — global site script
   Used by every page. Handles:
   - Header glass effect on scroll
   - Future: nav active state highlighting, lazy loads, etc.
   ===================================== */

(function () {
  // --- Header scroll glass effect ---
  const header = document.querySelector('.site-header');
  if (header) {
    let scrolled = false;
    const onScroll = () => {
      const isScrolled = window.scrollY > 16;
      if (isScrolled !== scrolled) {
        scrolled = isScrolled;
        header.classList.toggle('is-scrolled', scrolled);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
