import { createRocketNotesInfo } from "./createProjectsInfo.js";

export function showProjectsInfo() {
  const rocketNotesButton = document.getElementById("rocketNotes");
  const projectsInfoSection = document.getElementById("projectsInfo");
  createRocketNotesInfo();
  rocketNotesButton.addEventListener("click", () => {
    projectsInfoSection.style.display = "grid";
  });
}
