const quoteText = document.getElementById("quote");

const quoteButton = document.getElementById("quote-btn");

async function loadQuote() {
  quoteText.innerText = "Loading quote...";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    const data = await response.json();

    quoteText.innerText = `"${data.quote}" — ${data.author}`;
  } catch {
    quoteText.innerText = "Unable to load quote.";
  }
}

quoteButton?.addEventListener("click", loadQuote);
