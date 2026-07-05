// Handles all browser storage
const StorageUtil = {
  saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getData(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};
