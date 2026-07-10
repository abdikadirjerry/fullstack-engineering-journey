const AppState = {
  boards: StorageUtil.get("brandBoards") || [],

  addBoard(name, colors) {
    const newBoard = { id: Date.now(), name, colors };
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
