const element = document.getElementById("dark-mode-toggle");
const toggleIcon = document.getElementById("toggle-icon");

const toggleDarkMode = () => {
    element.classList.toggle("dark-mode");
    if(toggleIcon.classList.contains("fa-moon")) {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.toggle("fa-sun");
    } else {
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.toggle("fa-moon");
    }

}