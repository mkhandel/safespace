let backgroundImages = document.querySelectorAll(".backgroundImages");
console.log(backgroundImages);

for (let image of backgroundImages) {

    image.addEventListener("mouseover", () => {
        console.log(image);
        localStorage.setItem("backgroundURL", image.src);
    })


}