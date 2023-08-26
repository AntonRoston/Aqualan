// (() => {
//   const mobileMenu = document.querySelector('[data-menu]');
//   const menuOpen = document.querySelector('[data-menu-open]');
//   const menuClose = document.querySelector('[data-menu-close]');
//   const bodyLock = document.querySelector('[data-body-lock]');
//   const closebyLink = document.querySelectorAll('.menu__link');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       menuOpen.getAttribute('aria-expanded') === 'true' || false;
//     menuOpen.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');
//     menuOpen.classList.toggle('is-open');
//     bodyLock.classList.toggle('locked');
//   };

//   const closeMenu = () => {
//     mobileMenu.classList.remove('is-open');
//     menuOpen.classList.remove('is-open');
//     bodyLock.classList.remove('locked');
//     menuOpen.setAttribute('aria-expanded', false);
//   };

//   menuOpen.addEventListener('click', toggleMenu);
//   menuClose.addEventListener('click', toggleMenu);
//   closebyLink.forEach(b => b.addEventListener('click', closeMenu));

//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     menuOpen.classList.remove('is-open');
//     bodyLock.classList.remove('locked');
//     menuOpen.setAttribute('aria-expanded', false);
//   });
// })();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const closebyLink = document.querySelectorAll('.menu__link');

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");


    const closeMenu = () => {
      menuBtnRef.classList.remove('is-open');
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.setAttribute('aria-expanded', false);
     };
    
      mobileMenuRef.addEventListener('click', menuBtnRef);
    closebyLink.forEach(b => b.addEventListener('click', closeMenu));
    

  });
})();