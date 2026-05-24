// ======================================
// ERROR HANDLING
// ======================================

function fetchData() {
  return Promise.reject("Failed to load data");
}

async function loadData() {
  try {
    const result = await fetchData();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

loadData();
