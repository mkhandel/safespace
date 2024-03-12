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

















//FOR DEMO PAGE
//TODO: stop making it show up with an empty front page
//carousel
let images = ["assets/beach.png", "assets/bedroom.png", "assets/fallcolors.png", 
"assets/icywaterfall.png", "assets/moonlight.png", "assets/park.png", 
"assets/purplewaterfall.png", "assets/smalltown.png", "assets/stable.png", 
"assets/sunrise.png", "assets/sunsetbeach.png", "assets/texturedroom.png"];
let activeIndex = 0;

// if user has seen website, and they have image stored in local storage
if ( localStorage.getItem("backgroundURL")) { //localStorage.backgroundImage != null) {
  let activeSource = localStorage.getItem("backgroundURL");
  document.body.style.backgroundImage = `url(${activeSource})`;
  activeIndex = images.indexOf(activeSource);
  console.log("in if block");
} else { //if user has never been to website, we set image for them
  localStorage.setItem("backgroundURL", images[activeIndex]);
  let activeSource = localStorage.getItem("backgroundURL");
  document.body.style.backgroundImage = `url(${activeSource})`;
  console.log("in else block");
}

//functionality for carousel buttons
document.querySelector("#backButton").addEventListener("click", () => {
  console.log(backButton);
  if (activeIndex == 0) {
    activeIndex = images.length-1;
  } else {
    activeIndex--;
  }
  document.body.style.backgroundImage = `url(${images[activeIndex]})`;
})
document.querySelector("#nextButton").addEventListener("click", () => {
  console.log(nextButton);
  if (activeIndex == images.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  document.body.style.backgroundImage = `url(${images[activeIndex]})`;
})

//TODO: fix buggy save button
//save button functionality
document.querySelector("#saveli").addEventListener("click", () => {
  localStorage.setItem("backgroundURL", images[activeIndex]);
}
);

//TODO: move this to CSS
document.querySelectorAll("li").forEach(el => {
  el.addEventListener("mouseover", () => {
    //change color of list element when hovering over it
    document.body.style.background = "black";
    el.style.color = "white";
    //make my image disappear when hovering over any li element...
    document.querySelector("#waterfall").style.visibility = "hidden";
  })
});

document.querySelectorAll("li").forEach(el => {
  el.addEventListener("mouseout", () => {
    //change color of list element back when not hovering over it
    document.body.style.backgroundImage = `url(${images[activeIndex]})`;
    el.style.color = "black";
  })
});

document.querySelector("#noteli").addEventListener("mouseover", () => {
    document.querySelector("#notesbubble").style.visibility = "visible";
  }
);

document.querySelector("#noteli").addEventListener("mouseout", () => {
    document.querySelector("#notesbubble").style.visibility = "hidden";
  }
);

//change background
// let background = document.body.style.backgroundImage;
// console.log(background);
// console.log(background.src);
// let imageSource = localStorage.getItem("backgroundURL");
// background.src = imageSource;
// localStorage.setItem("backgroundURL", imageSource);