const App = {
  init() {
    // Cache DOM Elements
    this.clientNameInput = document.getElementById("clientName");
    this.colorPrimary = document.getElementById("colorPrimary");
    this.colorSecondary = document.getElementById("colorSecondary");
    this.colorAccent = document.getElementById("colorAccent");
    this.saveBtn = document.getElementById("saveBtn");
    this.boardGrid = document.getElementById("boardGrid");

    // Bind Events
    this.saveBtn.addEventListener("click", () => this.handleSave());

    // Initial Render
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

    AppState.addBoard(name, colors);
    this.clientNameInput.value = ""; // Reset input
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

      // Generate the HTML for the card, injecting inline styles for the background colors
      card.innerHTML = `
                <div class="card-header">
                    <span>${board.name}</span>
                    <button class="delete-btn" onclick="App.handleDelete(${board.id})">×</button>
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

// Boot the application
App.init();
