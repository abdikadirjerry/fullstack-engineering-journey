let projects = [];

function addProject(name) {
  projects.push({
    id: Date.now(),

    name,

    status: "Planned",
  });

  renderProjects();
}

function renderProjects() {
  const list = document.getElementById("project-list");

  if (!list) return;

  list.innerHTML = "";

  projects.forEach((project) => {
    list.innerHTML += `
      <li>
        ${project.name}
        -
        ${project.status}
      </li>
    `;
  });
}
