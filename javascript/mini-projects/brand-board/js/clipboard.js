// A modular utility to handle copying text to the user's clipboard
const ClipboardUtil = {
  copy(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Provide simple visual feedback
        alert(`Copied ${text} to clipboard!`);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  },
};
