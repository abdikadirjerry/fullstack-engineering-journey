export const Storage = {
  get(key, fallback = []) {
    const entry = localStorage.getItem(key);
    return entry ? JSON.parse(entry) : fallback;
  },
  set(key, targetData) {
    localStorage.setItem(key, JSON.stringify(targetData));
  },
};
