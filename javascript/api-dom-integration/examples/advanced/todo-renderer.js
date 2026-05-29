// ======================================
// TODO RENDERER
// ======================================

const todosContainer = document.getElementById("todos");

async function loadTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos = await response.json();

    todos.slice(0, 10).forEach((todo) => {
      todosContainer.innerHTML += `
        <p>
          ${todo.title}
        </p>
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

loadTodos();
