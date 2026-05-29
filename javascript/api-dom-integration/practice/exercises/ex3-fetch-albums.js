// ======================================
// EXERCISE 3
// FETCH ALBUMS
// ======================================

const albumsContainer = document.getElementById("albums");

async function loadAlbums() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  const albums = await response.json();

  albums.slice(0, 5).forEach((album) => {
    albumsContainer.innerHTML += `
      <p>${album.title}</p>
    `;
  });
}

loadAlbums();
