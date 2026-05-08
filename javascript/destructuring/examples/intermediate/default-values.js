const settings = { theme: "dark" };

// Providing a fallback if the property doesn't exist
const { theme, language = "English" } = settings;

console.log(theme); // "dark"
console.log(language); // "English" (Default)
