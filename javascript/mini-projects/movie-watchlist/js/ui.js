export function renderMovies(movies, list) {
  list.innerHTML = "";

  movies.forEach((movie, index) => {
    const li = document.createElement("li");

    li.classList.add("movie-item");

    li.innerHTML = `
      <div>
        <strong>${movie.title}</strong>
        <p>${movie.status}</p>
      </div>

      <button class="delete-btn" data-index="${index}">
        Delete
      </button>
    `;

    list.appendChild(li);
  });
}
