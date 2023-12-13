//change color of list element when hovering over it
//change color of list element back when not hovering over it
//make my background image disappear when hovering over any li element...
//...other than the background li...
//...and reappear once stopped hovering


document.querySelectorAll("li").forEach(el => {
  el.addEventListener("mouseover", () => {
    document.body.style.background = "black";
    el.style.color = "white";
    //document.querySelector("img").style.display = "none";
  })
});


document.querySelectorAll("li").forEach(el => {
  el.addEventListener("mouseout", () => {
    document.body.style.background = "pink";
    el.style.color = "black";
    //document.querySelector("img").style.display = "block";
  })
});


//document.getElementById("backgroundli").addEventListener("mouseover", () => {
//    document.querySelector("img").style.display = "block"
//  })
//});
