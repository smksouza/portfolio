const btn = document.getElementById("btnTop");
const btnCopyEmail = document.getElementById("copyEmail");
const rocketNotesOverlay = document.getElementById("Rocketnotes");
const projectsInfoSection = document.getElementById("projectsInfo");
const btnCloseRocket = document.getElementById("closeRocket");

const email = "smksouza.dev@gmail.com";

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

btnCopyEmail.addEventListener("click", () => {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copiado com sucesso !");
    })
    .catch((error) => {
      console.error("Error ao copiar o email:", error);
    });
});

rocketNotesOverlay.addEventListener("click", () => {
  projectsInfoSection.style.display = "grid";
});

btnCloseRocket.addEventListener("click", () => {
  projectsInfoSection.style.display = "none";
});
