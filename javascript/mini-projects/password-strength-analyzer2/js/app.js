const passwordInput = document.getElementById("password");

const toggleButton = document.getElementById("toggle-password");

const generateButton = document.getElementById("generate-btn");

const copyButton = document.getElementById("copy-btn");

passwordInput.addEventListener("input", analyzePassword);

toggleButton.addEventListener("click", togglePassword);

generateButton.addEventListener("click", generateNewPassword);

copyButton.addEventListener("click", copyPassword);

function analyzePassword() {
  const password = passwordInput.value;

  updateRequirement("length", hasMinLength(password));

  updateRequirement("uppercase", hasUppercase(password));

  updateRequirement("lowercase", hasLowercase(password));

  updateRequirement("number", hasNumber(password));

  updateRequirement("symbol", hasSymbol(password));

  const score = calculateStrength(password);

  updateStrengthUI(score);
}

function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    toggleButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";

    toggleButton.textContent = "Show";
  }
}

function generateNewPassword() {
  const password = generatePassword();

  passwordInput.value = password;

  analyzePassword();
}

async function copyPassword() {
  if (passwordInput.value === "") {
    alert("Generate or enter a password first.");

    return;
  }

  try {
    await navigator.clipboard.writeText(passwordInput.value);

    alert("Password copied successfully!");
  } catch {
    alert("Unable to copy password.");
  }
}

analyzePassword();
