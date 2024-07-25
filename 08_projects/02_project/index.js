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
