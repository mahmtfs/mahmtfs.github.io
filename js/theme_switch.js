var theme = parseInt(localStorage.getItem("theme"));

if (!theme){
    theme = 1;
}

function themeSetter(){
    theme = parseInt(localStorage.getItem("theme"));
    if (theme){
        document.getElementById("dark_mode_status").innerHTML = "ON";
        document.getElementById("dark_mode").className = "btn border-light rounded-0";
        document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "dark");
    }
    else{
        document.getElementById("dark_mode_status").innerHTML = "OFF";
        document.getElementById("dark_mode").className = "btn border-dark rounded-0";
        document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "light");
    }
}

function themeSwitch() {
    theme = (theme + 1) % 2;
    localStorage.setItem("theme", theme);
    themeSetter();
}
