const form = document.getElementById("application-form");

const list = document.getElementById("application-list");

let applications = loadApplications();

function renderApplications() {
  list.innerHTML = "";

  applications.forEach((application, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
<div>
<strong>
${application.company}
</strong>
<br>
${application.position}
<br>
Status:
${application.status}
</div>

<button
onclick="deleteApplication(${index})"
>
Delete
</button>
`;

    list.appendChild(li);
  });

  saveApplications(applications);

  updateStats(applications);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const company = document.getElementById("company").value;

  const position = document.getElementById("position").value;

  const status = document.getElementById("status").value;

  applications.push({
    company,
    position,
    status,
  });

  renderApplications();

  form.reset();
});

function deleteApplication(index) {
  applications.splice(index, 1);

  renderApplications();
}

renderApplications();
