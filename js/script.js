document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnTop");

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});