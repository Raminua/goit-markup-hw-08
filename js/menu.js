(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
  });
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            menuBtnRef.classList.remove("is-open");
             mobileMenuRef.classList.remove("is-open");
            body.classList.contains("no-scroll")  ? body.classList.remove("no-scroll") : ""
        }
       
    })
})();