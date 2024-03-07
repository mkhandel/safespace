document.querySelector(".toggle").addEventListener("click", () => {
    document.querySelector(".right").style.animation = "moveleft 1.5s ease-out";
    document.querySelector(".right").style.animationFillMode = "forwards";
})

document.querySelector(".toggleactive").addEventListener("click", () => {
    document.querySelector(".right").style.animation = "moveright 1.5s ease-in";
    document.querySelector(".right").style.animationFillMode = "forwards";
})