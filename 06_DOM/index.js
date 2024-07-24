const myUl = document.querySelector("ul");
const myLi = myUl.querySelectorAll("li");
// myLi[myLi.length-1].style.color = 'black';
myLi.forEach((list) => {
  list.style.backgroundColor = "orange";
  list.style.padding = "8px 15px";
  list.style.borderRadius = "10px";
});

myLi[myLi.length - 1].innerText= "portfolio";
