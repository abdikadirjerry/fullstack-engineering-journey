// ======================================
// RANDOM QUOTE FETCH
// ======================================

async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");

    const quote = await response.json();

    console.log(quote.content);
  } catch (error) {
    console.log(error);
  }
}

getQuote();
