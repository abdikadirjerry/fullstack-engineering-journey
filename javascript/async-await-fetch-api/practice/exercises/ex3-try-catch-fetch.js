// ======================================
// EXERCISE 3
// TRY CATCH FETCH
// ======================================

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Fetch failed");

    console.log(error);
  }
}

fetchData();
