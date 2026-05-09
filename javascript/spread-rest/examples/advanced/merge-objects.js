const defaults = { theme: "light", language: "English" };
const userSettings = { theme: "dark" };

// Merging: userSettings overrides defaults because it is spread last
const settings = { ...defaults, ...userSettings };

console.log("Final Settings:", settings);
