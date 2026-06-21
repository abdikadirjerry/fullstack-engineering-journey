const passwordInput = document.getElementById("password-input");

const generateBtn = document.getElementById("generate-btn");

const copyBtn = document.getElementById("copy-btn");

const toggleBtn = document.getElementById("toggle-password");

passwordInput.addEventListener("input", () => {
  const result = analyzePassword(passwordInput.value);

  updateStrength(result);
});

generateBtn.addEventListener("click", () => {
  const password = generatePassword();

  passwordInput.value = password;

  const result = analyzePassword(password);

  updateStrength(result);
});

copyBtn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(passwordInput.value);

  alert("Password copied.");
});

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";

    toggleBtn.textContent = "Show";
  }
});
