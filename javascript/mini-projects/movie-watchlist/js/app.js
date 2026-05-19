import { renderMovies } from "./ui.js";

const form = document.getElementById("movie-form");
const titleInput = document.getElementById("movie-title");
const statusInput = document.getElementById("movie-status");
const movieList = document.getElementById("movie-list");

const movies = [];

renderMovies(movies, movieList);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const movie = {
    title: titleInput.value,
    status: statusInput.value,
  };

  movies.push(movie);

  renderMovies(movies, movieList);

  form.reset();
});
