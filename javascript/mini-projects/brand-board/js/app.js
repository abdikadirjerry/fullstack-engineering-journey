const App = {
  init() {
    this.clientNameInput = document.getElementById("clientName");
    this.colorPrimary = document.getElementById("colorPrimary");
    this.colorSecondary = document.getElementById("colorSecondary");
    this.colorAccent = document.getElementById("colorAccent");

    // NEW: Cache font inputs
    this.fontPrimary = document.getElementById("fontPrimary");
    this.fontSecondary = document.getElementById("fontSecondary");

    this.saveBtn = document.getElementById("saveBtn");
    this.boardGrid = document.getElementById("boardGrid");

    this.saveBtn.addEventListener("click", () => this.handleSave());
    this.render();
  },

  handleSave() {
    const name = this.clientNameInput.value.trim();

    if (!name) {
      alert("Please enter a client or project name.");
      return;
    }

    const colors = {
      primary: this.colorPrimary.value,
      secondary: this.colorSecondary.value,
      accent: this.colorAccent.value,
    };

    // NEW: Capture font values (defaulting to 'N/A' if left blank)
    const fonts = {
      primary: this.fontPrimary.value.trim() || "N/A",
      secondary: this.fontSecondary.value.trim() || "N/A",
    };

    // NEW: Pass fonts to the state
    AppState.addBoard(name, colors, fonts);

    // Reset all inputs
    this.clientNameInput.value = "";
    this.fontPrimary.value = "";
    this.fontSecondary.value = "";
    this.render();
  },

  handleDelete(id) {
    if (confirm("Delete this brand board?")) {
      AppState.deleteBoard(id);
      this.render();
    }
  },

  render() {
    this.boardGrid.innerHTML = "";

    AppState.boards.forEach((board) => {
      const card = document.createElement("div");
      card.classList.add("brand-card");

      // NEW: Added the .font-row div below the card-header
      card.innerHTML = `
                <div class="card-header">
                    <span>${board.name}</span>
                    <button class="delete-btn" onclick="App.handleDelete(${board.id})">×</button>
                </div>
                <div class="font-row">
                    <span><strong>H:</strong> ${board.fonts?.primary || "N/A"}</span>
                    <span><strong>P:</strong> ${board.fonts?.secondary || "N/A"}</span>
                </div>
                <div class="color-row">
                    <div class="color-block" style="background-color: ${board.colors.primary}" onclick="ClipboardUtil.copy('${board.colors.primary}')">
                        ${board.colors.primary}
                    </div>
                    <div class="color-block" style="background-color: ${board.colors.secondary}" onclick="ClipboardUtil.copy('${board.colors.secondary}')">
                        ${board.colors.secondary}
                    </div>
                    <div class="color-block" style="background-color: ${board.colors.accent}" onclick="ClipboardUtil.copy('${board.colors.accent}')">
                        ${board.colors.accent}
                    </div>
                </div>
            `;

      this.boardGrid.appendChild(card);
    });
  },
};

App.init();
