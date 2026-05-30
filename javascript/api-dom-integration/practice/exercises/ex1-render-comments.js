// ======================================
// EXERCISE 1
// RENDER COMMENTS
// ======================================

const commentsContainer = document.getElementById("comments");

async function loadComments() {
  commentsContainer.innerHTML = "<p>Loading comments...</p>";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
    );

    const comments = await response.json();

    commentsContainer.innerHTML = "";

    comments.slice(0, 5).forEach((comment) => {
      commentsContainer.innerHTML += `
        <div>
          <h4>${comment.name}</h4>
          <p>${comment.email}</p>
        </div>
      `;
    });
  } catch (error) {
    commentsContainer.innerHTML = "<p>Failed to load comments.</p>";
  }
}

loadComments();
