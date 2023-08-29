export function handleCopyEmail(copyEmail) {
  const email = "smksouza.dev@gmail.com";
  const btnCopyEmail = document.getElementById(copyEmail);

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
