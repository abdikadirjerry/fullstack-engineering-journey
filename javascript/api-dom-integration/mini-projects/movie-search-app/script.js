// ======================================
// MOVIE SEARCH APP
// ======================================

const input = document.getElementById("movie-input");

const button = document.getElementById("search-btn");

const moviesContainer = document.getElementById("movies");

async function searchMovies() {
  moviesContainer.innerHTML = "Loading movies...";

  const response = await fetch("https://api.tvmaze.com/search/shows?q=batman");

  const movies = await response.json();

  moviesContainer.innerHTML = "";

  movies.slice(0, 5).forEach((movie) => {
    moviesContainer.innerHTML += `
      <h3>${movie.show.name}</h3>
    `;
  });
}

button.addEventListener("click", searchMovies);
