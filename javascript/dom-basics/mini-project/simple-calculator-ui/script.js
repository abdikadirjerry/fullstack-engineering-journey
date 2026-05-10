// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      display.value = "";
      return;
    }

    if (value === "=") {
      try {
        // Note: eval() is used here for simplicity in a learning context.
        // For production apps, avoid eval() for security reasons.
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
      return;
    }

    display.value += value;
  });
});
