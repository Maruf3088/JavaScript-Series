setInterval(function () {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const box = document.querySelector(".box");
  box.innerHTML = time;
}, 1000);
