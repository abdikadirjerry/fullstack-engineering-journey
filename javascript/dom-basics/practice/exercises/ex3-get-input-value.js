/* Expected HTML:
  <input type="text" id="search-bar" placeholder="Search..." />
*/

// ❓ Print input value when user types
const searchBar = document.getElementById("search-bar");

// Listen for the 'input' event, which fires on every keystroke
searchBar.addEventListener("input", () => {
  console.log("User typed:", searchBar.value);
});
