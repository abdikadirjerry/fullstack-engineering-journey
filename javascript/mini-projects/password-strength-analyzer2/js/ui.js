function updateRequirement(id, passed) {
  const element = document.getElementById(id);

  if (passed) {
    element.textContent = "✅ " + element.textContent.substring(2);
  } else {
    element.textContent = "❌ " + element.textContent.substring(2);
  }
}

function updateStrengthUI(score) {
  const bar = document.getElementById("strength-bar");

  const text = document.getElementById("strength-text");

  switch (score) {
    case 0:
    case 1:
      bar.style.width = "20%";
      bar.style.background = "#e74c3c";
      text.textContent = "Strength: Very Weak";
      break;

    case 2:
      bar.style.width = "40%";
      bar.style.background = "#e67e22";
      text.textContent = "Strength: Weak";
      break;

    case 3:
      bar.style.width = "60%";
      bar.style.background = "#f1c40f";
      text.textContent = "Strength: Medium";
      break;

    case 4:
      bar.style.width = "80%";
      bar.style.background = "#2ecc71";
      text.textContent = "Strength: Strong";
      break;

    case 5:
      bar.style.width = "100%";
      bar.style.background = "#27ae60";
      text.textContent = "Strength: Very Strong";
      break;
  }
}
