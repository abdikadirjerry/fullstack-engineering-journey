// ======================================
// RENDER POSTS
// ======================================

const postsContainer = document.getElementById("posts");

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  posts.slice(0, 5).forEach((post) => {
    postsContainer.innerHTML += `
      <h3>${post.title}</h3>
    `;
  });
}

loadPosts();
