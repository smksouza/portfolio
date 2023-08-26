import { handleReadMoreButton } from "./readMoreButton.js";
import { handleScrollButton } from "./scrollButton.js";
import { handleCopyEmail } from "./copyEmail.js";
import { reveal } from "./scrollReveal.js";

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

reveal();
handleReadMoreButton();
handleCopyEmail();
handleScrollButton();
handleRocketNotesOverlay();
