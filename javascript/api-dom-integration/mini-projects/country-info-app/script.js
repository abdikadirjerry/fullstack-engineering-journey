// ======================================
// COUNTRY INFO APP
// ======================================

const button = document.getElementById("country-btn");

const countryContainer = document.getElementById("country");

async function loadCountry() {
  const response = await fetch("https://restcountries.com/v3.1/name/somalia");

  const country = await response.json();

  countryContainer.innerHTML = `
    <h2>${country[0].name.common}</h2>
    <p>Population: ${country[0].population}</p>
  `;
}

button.addEventListener("click", loadCountry);
