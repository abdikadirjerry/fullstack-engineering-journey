// ======================================
// DATA FETCH SIMULATION
// ======================================

// Create promise
const fetchData = new Promise((resolve) => {
  console.log("Fetching data...");

  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 3000);
});

// Handle promise
fetchData.then((data) => {
  console.log(data);
});
