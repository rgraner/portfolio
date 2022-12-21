// dark mode
const darkModeButton = document.getElementById("dark-mode");
const lightModeButton = document.getElementById("light-mode");
const darkNavItem = document.getElementsByTagName("a");
const darkNavBg = document.querySelector("header");
const darkColor = "rgb(39, 39, 39)";
const lightColor = "white";

function darkMode() {
    document.body.style.backgroundColor = darkColor;
    document.body.style.color = lightColor;
    darkModeButton.style.display = "none";
    lightModeButton.style.display = "block";
    darkNavBg.style.backgroundColor = darkColor;
    for (let i = 0; i < darkNavItem.length; i++) {
        darkNavItem[i].style.color = lightColor;
    };
    localStorage.setItem("dark", "true");
}

function lightMode() {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    darkModeButton.style.display = "";
    lightModeButton.style.display = "";
    darkNavBg.style.backgroundColor = "";
    for (let i = 0; i < darkNavItem.length; i++) {
        darkNavItem[i].style.color = "";
    };
    localStorage.setItem("dark", "false");
}

if (localStorage.getItem("dark") === "true") {
    darkMode();
}

if (localStorage.getItem("dark") === "false") {
    lightMode();
}

darkModeButton.onclick = darkMode;
lightModeButton.onclick = lightMode;
  

// current year
const currentYear = new Date().getFullYear();

document.getElementById("current-year").innerHTML = currentYear;