const moodSelect = document.getElementById("mood");
const pickButton = document.getElementById("pick-btn");

const movieTitle = document.getElementById("movie-title");
const movieDescription = document.getElementById("movie-description");

function getRandomMovie(movieList) {
  const randomIndex = Math.floor(Math.random() * movieList.length);

  return movieList[randomIndex];
}

function displayMovie(movie) {
  movieTitle.textContent = movie.title;
  movieDescription.textContent = movie.description;
}

function pickMovie() {
  const selectedMood = moodSelect.value;

  if (!selectedMood) {
    alert("Please select a mood.");
    return;
  }

  const movieList = movies[selectedMood];

  const randomMovie = getRandomMovie(movieList);

  displayMovie(randomMovie);
}

pickButton.addEventListener("click", pickMovie);
