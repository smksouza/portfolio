document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
