export function handleReadMoreButton() {
  const readBtn = document.getElementById("readBtn");
  const myProjects = document.querySelector(".myProjects");
  readBtn.addEventListener("click", () => {
    myProjects.classList.toggle("active");
    if (myProjects.classList.contains("active")) {
      return (readBtn.textContent = "Ver menos");
    }
    readBtn.textContent = "Ver mais";
  });
}
