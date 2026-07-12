const ClipboardUtil = {
  copy(text) {
    if (!text || text === "Click Generate...") return;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Password copied securely to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy", err);
      });
  },
};
