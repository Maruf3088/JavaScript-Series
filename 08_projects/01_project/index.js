const box = document.querySelectorAll(".box");
box.forEach((item) => {
  item.addEventListener("click", function (event) {
    if (event.target.id === "box-1") {
      document.body.style.backgroundColor = "dodgerblue";
    } else if (event.target.id === "box-2") {
      document.body.style.backgroundColor = "rgb(131, 30, 255)";
    } else if (event.target.id === "box-3") {
      document.body.style.backgroundColor = "yellow";
    } else if (event.target.id === "box-4") {
      document.body.style.backgroundColor = "rgb(30, 255, 75)";
    } else if (event.target.id === "box-5") {
      document.body.style.backgroundColor = "white";
    }
  });
});
