// ❓ Extract object properties into variables
const movie = { title: "Inception", year: 2010, director: "Nolan" };

const { title, year, director } = movie;

console.log(`${title} (${year}) - Dir: ${director}`);
