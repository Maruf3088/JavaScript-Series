const hex = "0123456789ABCDEF";
let color = "#";

const start = document.querySelector(".startbtn");
const stopwork = document.querySelector(".stopbtn");
const body = document.querySelector("body");
let interval1;
const operation = function () {
  function colorchanger() {
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
    color = "#";
  }
  interval1 = setInterval(colorchanger, 500);
};
const operation2 = function () {
  clearInterval(interval1);
  interval1 = null;
};

start.addEventListener("click", operation);
stopwork.addEventListener("click", operation2);
