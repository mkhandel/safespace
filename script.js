//extract name of file
let path = window.location.pathname;
let page = path.split("/").pop().split(".")[0];
console.log( page );

let menuItem;
if (page == "index") {
    menuItem = "home";
} else if (page == "about") {
    menuItem = "about";
} else if (page == "contact") {
    menuItem = "contact";
} else if (page == "demo") {
    menuItem = "demo";
} else if (page == "login") {
    menuItem = "login";
}

document.querySelector(".toggle").addEventListener("click", () => {
    document.querySelector(".right").style.animation = "moveleft 1.5s ease-out";
    document.querySelector(".right").style.animationFillMode = "forwards";
})

document.querySelector(".toggleactive").addEventListener("click", () => {
    document.querySelector(".right").style.animation = "moveright 1.5s ease-in";
    document.querySelector(".right").style.animationFillMode = "forwards";
})

document.querySelector("."+menuItem).addEventListener("click", () => {
    document.querySelector(".right").style.animation = "moveright 1.5s ease-in";
    document.querySelector(".right").style.animationFillMode = "forwards";
})