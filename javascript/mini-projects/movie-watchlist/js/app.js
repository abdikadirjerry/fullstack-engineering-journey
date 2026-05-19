import { renderMovies } from "./ui.js";

const movieList = document.getElementById("movie-list");

const movies = [
  {
    title: "Interstellar",
    status: "Watching",
  },
];

renderMovies(movies, movieList);
