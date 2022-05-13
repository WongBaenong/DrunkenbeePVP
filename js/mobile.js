const openNav = document.querySelector(".open-nav");
const nav = document.querySelector("nav");
const navUl = document.querySelector("nav > .region-list");

const CLASS_ROLE = "role";

const toggleMobileMenu = () => {
  openNav.innerText === "▼"
    ? (openNav.innerText = "▲")
    : (openNav.innerText = "▼");
  nav.classList.toggle(CLASS_ROLE);
  navUl.classList.toggle(CLASS_ROLE);
};

openNav.addEventListener("click", toggleMobileMenu);
