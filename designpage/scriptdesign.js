

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
    document.body.style.background = "pink";
    el.style.color = "black";
    //make my image reappear once stopped hovering
    document.querySelector("#waterfall").style.visibility = "visible";
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
