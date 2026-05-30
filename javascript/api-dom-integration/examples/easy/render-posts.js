// ======================================
// RENDER POSTS
// ======================================

const postsContainer = document.getElementById("posts");

async function loadPosts() {
  postsContainer.innerHTML = "<p>Loading posts...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    postsContainer.innerHTML = "";

    posts.slice(0, 5).forEach((post) => {
      postsContainer.innerHTML += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
  } catch (error) {
    postsContainer.innerHTML = "<p>Failed to load posts.</p>";
  }
}

loadPosts();
