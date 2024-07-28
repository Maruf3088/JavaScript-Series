const myInput = document.querySelector("#myInput");

const operation = function (e) {
  console.log(e);
  document.querySelector(".keyPressed").innerHTML = `key pressed : ${e.key}`;
  document.querySelector(".keyCode").innerHTML = `key code : ${e.code}`;
  document.querySelector(
    ".charCodeAt"
  ).innerHTML = `char codeAt : ${e.key.charCodeAt(0)}`;
  document.querySelector(".event").innerHTML = `Event type : ${e.type}`;
};

myInput.addEventListener("keydown", operation);
