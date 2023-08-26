export function createRocketNotesInfo() {
  const projectsInfoSection = document.getElementById("projectsInfo");

  const rocketNotesInfoDiv = document.createElement("div");
  rocketNotesInfoDiv.className = "rocketnotesInfo";

  const closeButton = document.createElement("button");
  closeButton.id = "closeRocket";
  closeButton.className = "close";
  closeButton.textContent = "❌";

  closeButton.addEventListener("click", () => {
    projectsInfoSection.style.display = "none";
  });

  const image = document.createElement("img");
  image.src = "../assets/imagens/Rocket Notes.png";
  image.alt = "";

  const heading = document.createElement("h2");
  heading.textContent = "Rocketnotes";

  const description1 = document.createElement("p");
  description1.textContent =
    "Aplicação para salvar e gerenciar seus links úteis.";

  const description2 = document.createElement("p");
  description2.textContent = "Foram utilizadas as seguintes tecnologias:";

  const technologiesList = document.createElement("ul");

  const technologies = [
    "ReactJS",
    "JavaScript",
    "Styled Components",
    "NodeJS",
    "Express",
    "SQLite",
    "knexJS",
  ];

  technologies.forEach((tech) => {
    const techItem = document.createElement("li");
    techItem.textContent = tech;
    technologiesList.appendChild(techItem);
  });

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "buttonRocket";

  const link = document.createElement("a");
  link.href = "https://rocketnotes-five-tau.vercel.app/";
  link.target = "_blank";
  link.textContent = "ver projeto online";

  buttonDiv.appendChild(link);

  rocketNotesInfoDiv.appendChild(closeButton);
  rocketNotesInfoDiv.appendChild(image);
  rocketNotesInfoDiv.appendChild(heading);
  rocketNotesInfoDiv.appendChild(description1);
  rocketNotesInfoDiv.appendChild(description2);
  rocketNotesInfoDiv.appendChild(technologiesList);
  rocketNotesInfoDiv.appendChild(buttonDiv);
  projectsInfoSection.appendChild(rocketNotesInfoDiv);
}
