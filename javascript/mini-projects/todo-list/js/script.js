const todoForm = document.querySelector(".todo-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const taskItem = document.createElement("li");

  taskItem.textContent = taskText;

  taskList.appendChild(taskItem);

  taskInput.value = "";
});
