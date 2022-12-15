// dark mode
const darkModeToggle = document.getElementById("dark-mode");
const lightModeToggle = document.getElementById("light-mode");
const darkNavItem = document.getElementsByTagName("a");
const darkNavBg = document.querySelector("header");

function darkMode() {
    document.body.style.backgroundColor = "rgb(39, 39, 39)";
    document.body.style.color = "white";
    darkModeToggle.style.display = "none";
    lightModeToggle.style.display = "block";
    darkNavBg.style.backgroundColor = "rgb(39, 39, 39)";
    for (let i = 0; i < darkNavItem.length; i++) {
        darkNavItem[i].style.color = "white";
    }
}

function lightMode() {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    darkModeToggle.style.display = "";
    lightModeToggle.style.display = "";
    darkNavBg.style.backgroundColor = "";
    for (let i = 0; i < darkNavItem.length; i++) {
        darkNavItem[i].style.color = "";
    } 
}

lightModeToggle.onclick = lightMode;
darkModeToggle.onclick = darkMode;  


// current year
const currentYear = new Date().getFullYear();

document.getElementById("current-year").innerHTML = currentYear;