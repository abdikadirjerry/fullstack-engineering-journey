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

  const taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;
  taskTextElement.classList.add("task-text");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  taskTextElement.addEventListener("click", function () {
    taskTextElement.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  taskInput.value = "";
});
