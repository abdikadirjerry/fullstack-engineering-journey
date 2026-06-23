function renderResources(resources) {
  const resourceList = document.getElementById("resource-list");

  resourceList.innerHTML = "";

  if (resources.length === 0) {
    resourceList.innerHTML = `
            <tr>
                <td colspan="4">
                    No resources found
                </td>
            </tr>
        `;

    updateStatistics([]);

    return;
  }

  resources.forEach((resource) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${resource.title}</td>

            <td>${resource.category}</td>

            <td>
                <a
                    href="${resource.url}"
                    target="_blank"
                    class="visit-btn"
                >
                    Visit
                </a>
            </td>

            <td>
                <button
                    class="delete-btn"
                    data-id="${resource.id}"
                >
                    Delete
                </button>
            </td>
        `;

    resourceList.appendChild(row);
  });

  updateStatistics(resources);
}
