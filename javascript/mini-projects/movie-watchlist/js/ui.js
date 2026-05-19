export function renderMovies(movies, list) {
  list.innerHTML = "";

  movies.forEach((movie) => {
    const li = document.createElement("li");

    li.classList.add("movie-item");

    li.innerHTML = `
      <strong>${movie.title}</strong>
      <span>${movie.status}</span>
    `;

    list.appendChild(li);
  });
}
