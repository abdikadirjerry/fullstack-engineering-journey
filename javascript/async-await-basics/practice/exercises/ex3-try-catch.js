// ======================================
// EXERCISE 3
// TRY CATCH
// ======================================

function fetchData() {
  return Promise.reject("Network Error");
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
