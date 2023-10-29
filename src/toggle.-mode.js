let darkMode = true;

const buttonToggle = document.querySelector(".toggle-mode")

buttonToggle.addEventListener("click", (e)=>{
    document.documentElement.classList.toggle("light");

    const mode = darkMode ? "Light" : "Dark";

    e.currentTarget
    .querySelector("span")
    .textContent = `${mode} mode Ativado`;

    darkMode = !darkMode;
});

