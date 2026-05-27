// ======================================
// FETCH POSTS
// ======================================

async function getPosts() {
  try {
    console.log("Loading posts...");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    console.log("Posts loaded successfully");

    console.log(`Total posts: ${posts.length}`);

    console.log(posts);
  } catch (error) {
    console.log("Failed to fetch posts");

    console.log(error);
  }
}

getPosts();
