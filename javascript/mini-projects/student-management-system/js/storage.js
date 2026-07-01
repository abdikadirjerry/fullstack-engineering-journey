export const Storage = {
  get(key, fallback = []) {
    try {
      const entry = localStorage.getItem(key);
      return entry ? JSON.parse(entry) : fallback;
    } catch (error) {
      console.error("Storage parsing error:", error);
      return fallback;
    }
  },
  set(key, targetData) {
    localStorage.setItem(key, JSON.stringify(targetData));
  },
};
