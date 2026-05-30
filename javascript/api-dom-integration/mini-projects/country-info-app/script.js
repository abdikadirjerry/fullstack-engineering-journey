// ======================================
// COUNTRY INFO APP
// ======================================

const button = document.getElementById("country-btn");

const countryContainer = document.getElementById("country");

async function loadCountry() {
  countryContainer.innerHTML = "<p>Loading country...</p>";

  try {
    const response = await fetch("https://restcountries.com/v3.1/name/somalia");

    const country = await response.json();

    countryContainer.innerHTML = `
      <h2>
        ${country[0].name.common}
      </h2>

      <p>
        Population:
        ${country[0].population}
      </p>

      <p>
        Capital:
        ${country[0].capital[0]}
      </p>

      <p>
        Region:
        ${country[0].region}
      </p>

      <img
        src="${country[0].flags.png}"
        width="150"
      >
    `;
  } catch (error) {
    countryContainer.innerHTML = "<p>Failed to load country data.</p>";
  }
}

button.addEventListener("click", loadCountry);
