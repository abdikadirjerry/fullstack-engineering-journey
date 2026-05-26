// ======================================
// FETCH POSTS
// ======================================

async function getPosts() {
  try {
    console.log("Loading posts...");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

getPosts();
