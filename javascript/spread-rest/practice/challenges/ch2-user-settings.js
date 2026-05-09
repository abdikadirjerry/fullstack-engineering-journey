const defaultSettings = { theme: "light", notifications: true, volume: 50 };
const customSettings = { theme: "dark", volume: 80 };

// ❓ Merge settings objects ensuring custom overrides defaults
const finalSettings = { ...defaultSettings, ...customSettings };

console.log("User Config:", finalSettings);
