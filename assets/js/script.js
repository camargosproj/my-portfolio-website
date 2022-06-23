const darkToggle = document.getElementById("dark-mode-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const slideBtn = document.getElementsByClassName("slide-btn");
const imgSlide = document.getElementsByClassName("img-slide")[0];
const sideBar = document.getElementsByClassName("sidebar-container")[0];
const sideContent = document.getElementsByClassName("side-content")[0];
const toggleSideBarBtn = document.getElementById("toggle-sideBar"); 
const hamburguerBtn = document.getElementsByClassName("hamburger-btn")[0];

const toggleDarkMode = () => {
    darkToggle.classList.toggle("dark-mode");
    if(toggleIcon.classList.contains("fa-moon")) {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.toggle("fa-sun");
    } else {
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.toggle("fa-moon");
    }

}   


const toggleSideBar = () => {
    if(sideBar.classList.contains("sidebar-container")){
        sideBar.classList.remove("sidebar-container");
        sideBar.classList.add("sidebar-mobile");
    }else{
        sideBar.classList.remove("sidebar-mobile");
        sideBar.classList.add("sidebar-container");
    }
}

window.addEventListener("resize",() => {
    console.log(window.innerWidth);
    if(window.innerWidth >= 700 && sideBar.classList.contains("sidebar-mobile")){
        sideBar.classList.remove("sidebar-mobile");
        sideBar.classList.add("sidebar-container");
    }
});
