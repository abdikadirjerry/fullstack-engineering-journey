const StrengthChecker = {
  evaluate(password) {
    let score = 0;

    if (password.length > 8) score += 1;
    if (password.length >= 16) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    // Control flow to determine the final output state
    if (score <= 2) {
      return { text: "Weak", color: "var(--weak)", width: "33%" };
    } else if (score <= 4) {
      return { text: "Medium", color: "var(--medium)", width: "66%" };
    } else {
      return { text: "Strong", color: "var(--strong)", width: "100%" };
    }
  },
};
