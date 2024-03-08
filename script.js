//if clicked on hamburger icon
document.querySelector(".toggle").addEventListener("click", () => {
    document.querySelector(".right").style.animation = "moveleft 1.5s ease-out";
    document.querySelector(".right").style.animationFillMode = "forwards";
})

//if clicked on X
document.querySelector(".toggleactive").addEventListener("click", () => {
    document.querySelector(".right").style.animation = "moveright 1.5s ease-in";
    document.querySelector(".right").style.animationFillMode = "forwards";
})

//if clicked on menu item
document.querySelector(".about").addEventListener("click", () => {
    console.log("in the file name click event listener");
    document.querySelector(".right").style.animation = "moveright 1.5s ease-in";
    document.querySelector(".right").style.animationFillMode = "forwards";
    location.href="about.html";
})