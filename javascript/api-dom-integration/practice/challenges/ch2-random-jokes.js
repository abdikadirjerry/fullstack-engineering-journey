// ======================================
// CHALLENGE 2
// RANDOM JOKES
// ======================================

const jokeButton = document.getElementById("joke-btn");

const jokeContainer = document.getElementById("joke");

async function loadJoke() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
  );

  const joke = await response.json();

  jokeContainer.innerHTML = `
    <h3>${joke.setup}</h3>
    <p>${joke.punchline}</p>
  `;
}

jokeButton.addEventListener("click", loadJoke);
