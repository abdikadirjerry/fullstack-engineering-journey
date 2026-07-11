const AppState = {
  boards: StorageUtil.get("brandBoards") || [],

  // NEW: Added 'fonts' parameter
  addBoard(name, colors, fonts) {
    const newBoard = { id: Date.now(), name, colors, fonts };
    this.boards.push(newBoard);
    this.save();
  },

  deleteBoard(id) {
    this.boards = this.boards.filter((board) => board.id !== id);
    this.save();
  },

  save() {
    StorageUtil.save("brandBoards", this.boards);
  },
};
