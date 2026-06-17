const exportButton = document.createElement("button");

exportButton.textContent = "Export Data";

document.querySelector(".container").prepend(exportButton);

exportButton.addEventListener("click", () => {
  const data = localStorage.getItem("applications");

  const blob = new Blob([data], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = "applications.json";

  link.click();
});
