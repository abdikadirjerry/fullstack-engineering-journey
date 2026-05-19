export function saveMovies(movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

export function getMovies() {
  return JSON.parse(localStorage.getItem("movies")) || [];
}
