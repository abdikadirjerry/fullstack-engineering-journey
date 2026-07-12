const App = {
  init() {
    // Inputs
    this.lengthSlider = document.getElementById("lengthSlider");
    this.lengthVal = document.getElementById("lengthVal");
    this.incUpper = document.getElementById("incUpper");
    this.incLower = document.getElementById("incLower");
    this.incNumbers = document.getElementById("incNumbers");
    this.incSymbols = document.getElementById("incSymbols");

    // Outputs
    this.passwordOutput = document.getElementById("passwordOutput");
    this.strengthBar = document.getElementById("strengthBar");
    this.strengthText = document.getElementById("strengthText");

    // Buttons
    this.generateBtn = document.getElementById("generateBtn");
    this.copyBtn = document.getElementById("copyBtn");

    // Bind Events
    this.lengthSlider.addEventListener("input", (e) =>
      this.updateSliderValue(e),
    );
    this.generateBtn.addEventListener("click", () => this.handleGenerate());
    this.copyBtn.addEventListener("click", () =>
      ClipboardUtil.copy(this.passwordOutput.innerText),
    );
  },

  updateSliderValue(e) {
    this.lengthVal.innerText = e.target.value;
  },

  handleGenerate() {
    const length = parseInt(this.lengthSlider.value);
    const useUpper = this.incUpper.checked;
    const useLower = this.incLower.checked;
    const useNumbers = this.incNumbers.checked;
    const useSymbols = this.incSymbols.checked;

    // Generate password using our logic file
    const newPassword = PasswordGenerator.generate(
      length,
      useUpper,
      useLower,
      useNumbers,
      useSymbols,
    );
    this.passwordOutput.innerText = newPassword;

    // Check strength using our validation file
    const strengthResult = StrengthChecker.evaluate(newPassword);

    // Update UI with strength results
    this.strengthBar.style.width = strengthResult.width;
    this.strengthBar.style.background = strengthResult.color;
    this.strengthText.innerText = `Strength: ${strengthResult.text}`;
    this.strengthText.style.color = strengthResult.color;
  },
};

App.init();
