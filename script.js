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
document.querySelector(".menu").addEventListener("click", (e) => {
    console.log("in the file name click event listener");
    document.querySelector(".right").style.animation = "moveright 1.5s ease-in";
    document.querySelector(".right").style.animationFillMode = "forwards";

    //wait for menu to slide backout to switch html pages
    setTimeout(function()
    {
        var path = window.location.pathname;
        var page = path.split("/").pop();
        console.log( page );
        console.log("here is inverted function output:");
        console.log(e.target.className);

        if (page != e.target.className) {
            location.href=e.target.className+".html";
        }
    }, 1500);
})