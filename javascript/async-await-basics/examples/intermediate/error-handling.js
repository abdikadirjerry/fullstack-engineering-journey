// ======================================
// ERROR HANDLING
// ======================================

function fetchData() {
  return Promise.reject("Failed to load data");
}

async function loadData() {
  console.log("Starting request...");

  try {
    const result = await fetchData();

    console.log(result);
  } catch (error) {
    console.log("Error occurred:");

    console.log(error);
  } finally {
    console.log("Request finished");
  }
}

loadData();
