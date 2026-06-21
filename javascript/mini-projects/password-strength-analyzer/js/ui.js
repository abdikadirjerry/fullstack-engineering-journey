function updateChecklist(checks) {
  document.getElementById("length-check").textContent = checks.length
    ? "✅ At least 8 characters"
    : "❌ At least 8 characters";

  document.getElementById("uppercase-check").textContent = checks.uppercase
    ? "✅ Uppercase letter"
    : "❌ Uppercase letter";

  document.getElementById("lowercase-check").textContent = checks.lowercase
    ? "✅ Lowercase letter"
    : "❌ Lowercase letter";

  document.getElementById("number-check").textContent = checks.number
    ? "✅ Number"
    : "❌ Number";

  document.getElementById("special-check").textContent = checks.special
    ? "✅ Special character"
    : "❌ Special character";
}

function updateStrength(result) {
  const progressBar = document.getElementById("progress-bar");

  progressBar.style.width = `${result.score}%`;

  if (result.score < 40) {
    progressBar.style.background = "red";
  } else if (result.score < 80) {
    progressBar.style.background = "orange";
  } else {
    progressBar.style.background = "green";
  }

  document.getElementById("strength-text").textContent =
    `Strength: ${result.strength}`;

  document.getElementById("score-text").textContent =
    `Score: ${result.score} / 100`;

  document.getElementById("entropy-text").textContent =
    `${result.entropy} bits`;

  updateChecklist(result.checks);
}
