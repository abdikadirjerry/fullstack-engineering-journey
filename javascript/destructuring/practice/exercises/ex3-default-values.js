// ❓ Use default values with destructuring
const config = { api: "[https://api.com](https://api.com)" };

const { api, port = 8080 } = config;

console.log(`API: ${api}, Port: ${port}`);
