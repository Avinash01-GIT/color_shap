// var color = [ "red", "orange",  "yellow",  "green",  "blue",  "indigo", "violet", "cyan", "brown", "orangered"];
// var index = 0;
// var isTriangle = false;

// var cShape = document.getElementById("change-shape");
// var cColor = document.getElementById("change-color");

// cShape.addEventListener("click",changeShape);
// cColor.addEventListener("click",changeColor);

// function changeColor() {
//   if(index === color.length){
//     index = 0;
//   }
//   document.getElementById("circle").style.backgroundColor = color[index];
//   index++;
// }

// function changeShape() {
//   if(!isTriangle){
//     var i = document.getElementsByClassName("inner")[0];
//     i.className = "triangle-bottom-left";
//     isTriangle = true;
//   } else {
//     var i = document.getElementsByClassName("triangle-bottom-left")[0];
//     i.className = "inner";
//     isTriangle = false;
//   }
// }

var color = [ "red", "cyan",  "black",  "violet",  "blue",  "yellow", "green", "purple",  "orange",  "lightgreen",  "brown" , "orangered"];

var arr = ["square", "triangle", "rectangle", "circle", "diamond"];

let outer = document.getElementById("outer");
let inner = document.getElementById("inner");
let colorbtn = document.getElementById("color");
let shapebtn = document.getElementById("shape");

colorbtn.onclick = function () {
  let style = inner.classList[0];
  let flag = true;
  let random;
  while (flag) {
    random = Math.floor(Math.random() * color.length);
    if (style != color[random]) {
      flag = false;
    }
  }
  outer.classList.remove(style);
  outer.style.backgroundColor = color[random];
};

shapebtn.onclick = function () {
let style = inner.classList[0];
let flag = true;
let random;
while (flag) {
  random = Math.floor(Math.random() * arr.length);
  if (style != arr[random]) {
    flag = false;
  }
}
inner.classList.remove(style);
inner.classList.add(arr[random]);
};