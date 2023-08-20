function handleScrollButton() {
  const btn = document.getElementById("btnTop");
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
}

function handleCopyEmail() {
  const email = "smksouza.dev@gmail.com";
  const btnCopyEmail = document.getElementById("copyEmail");

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
}

function handleRocketNotesOverlay() {
  const rocketNotesOverlay = document.getElementById("Rocketnotes");
  const projectsInfoSection = document.getElementById("projectsInfo");
  const btnCloseRocket = document.getElementById("closeRocket");

  rocketNotesOverlay.addEventListener("click", () => {
    projectsInfoSection.style.display = "grid";
  });

  btnCloseRocket.addEventListener("click", () => {
    projectsInfoSection.style.display = "none";
  });
}

handleCopyEmail();
handleScrollButton();
handleRocketNotesOverlay();
