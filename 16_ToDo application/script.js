// Select elements
const input = document.querySelector(".input");
const addbtn = document.querySelector(".input-btn");
const taskDiv = document.querySelector(".task-div");

// Initialize task array
let arr = JSON.parse(localStorage.getItem("taskItem")) || [];

// Function to add HTML for a new task
const addHtml = (value) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("task");
  newDiv.innerHTML = `
    <div class="task-content">
      <div class="text">${value}</div>
    </div>
    <button class="task-btn btn">Delete</button>
  `;
  taskDiv.appendChild(newDiv);
};

// Function to add a task
const addTask = () => {
  let inputValue = input.value;
  if (inputValue !== "") {
    arr.push(inputValue);
    localStorage.setItem("taskItem", JSON.stringify(arr));
    input.value = "";
    addHtml(inputValue);
  }
};

// Function to delete a task
const deleteTask = (e) => {
  if (e.target.classList.contains("task-btn")) {
    const taskElement = e.target.parentElement;
    const taskText = taskElement.querySelector(".text").innerText;
    arr = arr.filter((el) => el !== taskText);
    localStorage.setItem("taskItem", JSON.stringify(arr));
    
    taskElement.remove();
  }
};

// Function to show tasks from local storage
const showTask = () => {
  arr.forEach((element) => {
    addHtml(element);
  });
};
showTask();

// Event listeners
addbtn.addEventListener("click", addTask);
taskDiv.addEventListener("click", deleteTask);
