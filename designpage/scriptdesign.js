//carousel
let images = ["../assets/beach.png", "../assets/bedroom.png", "../assets/fallcolors.png", 
"../assets/icywaterfall.png", "../assets/moonlight.png", "../assets/park.png", "../assets/purplewaterfall.png", 
"../assets/smalltown.png", "../assets/stable.png", "../assets/sunrise.png", "../assets/sunsetbeach.png", "../assets/texturedroom.png"];
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


document.querySelector("#backgroundli").addEventListener("mouseover", () => {
    document.querySelector("#waterfall").style.visibility = "visible";
  }
);

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



