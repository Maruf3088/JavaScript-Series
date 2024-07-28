const str = "0123456789ABCDEF";
let color1 = "#";
let color2 = "#";
let tempcolor = "#74b9ff";
let tempcolor2 = "#a29bfe";

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const body = document.querySelector("body");
const copyBox = document.querySelector(".color");

const operation1 = function () {
  for (let i = 0; i < 6; i++) {
    color1 += str[Math.floor(Math.random() * 16)];
  }

  finalcolor = `linear-gradient( 90deg,${color1}  0%, ${tempcolor2}`;
  body.style.background = finalcolor;
  copyBox.innerHTML = `background:${finalcolor}`;

  //   console.log(color1);
  btn1.innerHTML = color1;
  tempcolor = color1;
  color1 = "#";
};
const operation2 = function () {
  for (let i = 0; i < 6; i++) {
    color2 += str[Math.floor(Math.random() * 16)];
  }
  finalcolor = `linear-gradient( 90deg,${tempcolor}  0%, ${color2}`;
  body.style.background = finalcolor;
  copyBox.innerHTML = `background: ${finalcolor}`;

  //   console.log(color1);
  btn2.innerHTML = color2;

  tempcolor2 = color2;
  color2 = "#";
};

btn1.addEventListener("click", operation1);
btn2.addEventListener("click", operation2);
copyBox.addEventListener("click",() =>{
     // Copy the text inside the text field
  navigator.clipboard.writeText(copyBox.innerHTML);
})
