const PasswordGenerator = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",

  generate(length, useUpper, useLower, useNumbers, useSymbols) {
    let charPool = "";

    // Control flow: Build the pool of available characters based on rules
    if (useUpper) charPool += this.upper;
    if (useLower) charPool += this.lower;
    if (useNumbers) charPool += this.numbers;
    if (useSymbols) charPool += this.symbols;

    // Fallback control: if user unchecks everything, default to lowercase
    if (charPool === "") charPool = this.lower;

    let password = "";
    // Loop through the requested length and pick random characters from the pool
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }

    return password;
  },
};
