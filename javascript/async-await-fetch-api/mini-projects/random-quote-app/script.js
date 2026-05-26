// ======================================
// RANDOM QUOTE APP
// ======================================

const button = document.getElementById("quote-btn");

const quote = document.getElementById("quote");

async function loadQuote() {
  quote.innerText = "Loading quote...";

  try {
    const response = await fetch("https://api.quotable.io/random");

    const data = await response.json();

    quote.innerText = data.content;
  } catch (error) {
    quote.innerText = "Failed to load quote";
  }
}

button.addEventListener("click", loadQuote);
