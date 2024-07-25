# My Project-1 Solution(BackgroundColorChanger)

```javaScript
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
```

# My Project-2 Solution(BMI Calculator)

```javaScript
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelectorAll("input");
  result[3].style.display = "inline-block";
  result[4].style.display = "inline-block";
  if (height === "" || height < 0 || isNaN(height)) {
    result[3].value = "!Please Enter A valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result[3].value = "!Please Enter A valid weight";
  } else {
    const value = (weight / ((height * height) / 10000)).toFixed(2);
    result[3].value = `Your BMI : ${value}`;
    if (value < 18.5) {
      result[4].value = `your Status : Underweight`;
    } else if (value >= 18.5 && value <= 24.9) {
      result[4].value = `your Status : Healthy`;
    } else if (value >= 25 && value <= 29.9) {
      result[4].value = "Your Status : Overweight";
    } else if (value >= 30) {
      result[4].value = "Your Status : Obese";
    }
  }
});

```

# My Project-3 Solution (Clock)

```javaScript
setInterval(function () {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const box = document.querySelector(".box");
  box.innerHTML = time;
}, 1000);


```
