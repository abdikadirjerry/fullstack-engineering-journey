const quote = document.getElementById("quote");

async function loadQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");

    const data = await response.json();

    quote.textContent = data.content;
  } catch {
    quote.textContent = "Stay focused and keep learning.";
  }
}

document.getElementById("new-quote").addEventListener("click", loadQuote);

loadQuote();
