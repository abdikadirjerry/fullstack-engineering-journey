// ======================================
// BASIC FETCH
// ======================================

console.log("Starting fetch request...");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log("Response received");

    return response.json();
  })
  .then((data) => {
    console.log("Users loaded successfully");

    console.log(data);
  })
  .catch((error) => {
    console.log("Fetch failed");

    console.log(error);
  });
