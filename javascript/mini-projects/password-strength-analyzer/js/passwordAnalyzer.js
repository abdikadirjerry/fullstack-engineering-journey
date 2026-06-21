function analyzePassword(password) {
  let score = 0;

  const checks = {
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  };

  if (password.length >= 8) {
    score += 20;
    checks.length = true;
  }

  if (/[A-Z]/.test(password)) {
    score += 20;
    checks.uppercase = true;
  }

  if (/[a-z]/.test(password)) {
    score += 20;
    checks.lowercase = true;
  }

  if (/[0-9]/.test(password)) {
    score += 20;
    checks.number = true;
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    score += 20;
    checks.special = true;
  }

  let strength = "Very Weak";

  if (score >= 80) {
    strength = "Strong";
  } else if (score >= 60) {
    strength = "Medium";
  } else if (score >= 40) {
    strength = "Weak";
  }

  const entropy = Math.round(password.length * Math.log2(94));

  return {
    score,
    strength,
    checks,
    entropy,
  };
}
