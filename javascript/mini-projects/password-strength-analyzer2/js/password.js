function hasMinLength(password) {
  return password.length >= 8;
}

function hasUppercase(password) {
  return /[A-Z]/.test(password);
}

function hasLowercase(password) {
  return /[a-z]/.test(password);
}

function hasNumber(password) {
  return /[0-9]/.test(password);
}

function hasSymbol(password) {
  return /[^A-Za-z0-9]/.test(password);
}

function calculateStrength(password) {
  let score = 0;

  if (hasMinLength(password)) {
    score++;
  }

  if (hasUppercase(password)) {
    score++;
  }

  if (hasLowercase(password)) {
    score++;
  }

  if (hasNumber(password)) {
    score++;
  }

  if (hasSymbol(password)) {
    score++;
  }

  return score;
}

function generatePassword(length = 12) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  let password = "";

  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * characters.length);

    password += characters[randomIndex];
  }

  return password;
}
