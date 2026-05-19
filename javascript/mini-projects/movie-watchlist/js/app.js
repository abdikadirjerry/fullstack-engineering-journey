import { renderMovies } from "./ui.js";
import { saveMovies, getMovies } from "./storage.js";
import { Movie } from "./movies.js";

const form = document.getElementById("movie-form");
const titleInput = document.getElementById("movie-title");
const statusInput = document.getElementById("movie-status");
const movieList = document.getElementById("movie-list");
const searchInput = document.getElementById("search");

const movies = getMovies();

renderMovies(movies, movieList);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const movie = new Movie(titleInput.value, statusInput.value);

  movies.push(movie);

  saveMovies(movies);

  renderMovies(movies, movieList);

  form.reset();
});

movieList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;

    movies.splice(index, 1);

    saveMovies(movies);

    renderMovies(movies, movieList);
  }
});

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(value);
  });

  renderMovies(filteredMovies, movieList);
});
