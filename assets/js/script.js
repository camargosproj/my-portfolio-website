const darkToggle = document.getElementById("dark-mode-toggle");
const toggleIcon = document.getElementById("toggle-icon");
const slideBtn = document.getElementsByClassName("slide-btn");
const imgSlide = document.getElementsByClassName("img-slide")[0];
const sideBar = document.getElementsByClassName("sidebar")[0];
const sideContent = document.getElementsByClassName("side-content")[0];

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

const changeSlide = (num) => {
    let btns = [...slideBtn];    
    btns.forEach(btn => {
        if(btn.classList.contains("slide-active")) {
            btn.classList.remove("slide-active");
        }
    });
    slideBtn[num].classList.add("slide-active");      
    fetchSlide();
}
const fetchSlide = async () => {
    response = await fetch("https://source.unsplash.com/random/?nature");
    imgSlide.src = response.url;
}

const toggleSideBar = () => {
    if(sideBar.style.display === "none"){   
        sideBar.style.display = "flex";
        sideContent.style.width = "85%";
        sideContent.style.left = "15%";
    }
    else {
        sideBar.style.display = "none";
        sideContent.style.width = "100%";
        sideContent.style.left = "0";
    }   
}
