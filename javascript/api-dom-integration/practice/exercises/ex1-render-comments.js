// ======================================
// EXERCISE 1
// RENDER COMMENTS
// ======================================

const commentsContainer = document.getElementById("comments");

async function loadComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");

  const comments = await response.json();

  comments.slice(0, 5).forEach((comment) => {
    commentsContainer.innerHTML += `
      <p>${comment.email}</p>
    `;
  });
}

loadComments();
