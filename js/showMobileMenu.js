export function showMobileMenu() {
  const btnShowMobileMenu = document.getElementById("showMenu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuItems = mobileMenu.querySelectorAll("a");

  btnShowMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("open-menu");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("open-menu");
    });
  });
}
