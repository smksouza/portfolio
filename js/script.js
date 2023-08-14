const btn = document.getElementById("btnTop");
const btnCopyEmail = document.getElementById("copyEmail");

const email = "smksouza.dev@gmail.com";

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  scrollToTop();
});

function scrollToTop() {
  const scrollStep = -window.scrollY / 50;

  function scroll() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}

btnCopyEmail.addEventListener("click", () => {
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copiado com sucesso !")
  }).catch((error) => {
    console.error("Error ao copiar o email:", error)
  })
});
