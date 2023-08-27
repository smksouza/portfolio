export function showMobileMenu() {
  const btnShowMobileMenu = document.getElementById("showMenu");
  const mobileMenu = document.querySelector(".mobile-menu");
  btnShowMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open-menu");
  });
}
