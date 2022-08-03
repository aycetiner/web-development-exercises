const taskInput = document.querySelector("#addTask");
const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

ul.innerHTML = localStorage.getItem("todoList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const todoListInput = document.createElement("li");
  const doneBtn = document.createElement("button");
  doneBtn.innerText = "Mark Completed";
  todoListInput.innerText = taskInput.value;
  console.log(todoListInput.innerText);
  todoListInput.append(doneBtn);
  ul.append(todoListInput);
  taskInput.value = "";
  const newUl = ul.innerHTML;
  localStorage.setItem("todoList", newUl);
});

ul.addEventListener("click", function (e) {
  console.log(e.target.parentElement);
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.classList.toggle("completed");
  }
  const newUl = ul.innerHTML;
  localStorage.setItem("todoList", newUl);
});
