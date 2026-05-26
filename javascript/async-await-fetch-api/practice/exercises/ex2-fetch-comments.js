// ======================================
// EXERCISE 2
// FETCH COMMENTS
// ======================================

async function loadComments() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
    );

    const comments = await response.json();

    console.log(comments);
  } catch (error) {
    console.log(error);
  }
}

loadComments();
