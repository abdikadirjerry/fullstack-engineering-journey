const todoManager = {
  todos: [],

  addTodo(task) {
    this.todos.push({ task, completed: false });
    console.log(`Added task: ${task}`);
  },

  listTodos() {
    console.log("--- My Todo List ---");
    this.todos.forEach((t, i) => {
      console.log(`${i + 1}. [${t.completed ? "X" : " "}] ${t.task}`);
    });
  },
};

todoManager.addTodo("Learn Object Methods");
todoManager.addTodo("Push to GitHub");
todoManager.listTodos();
