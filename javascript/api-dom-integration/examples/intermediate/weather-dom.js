// ======================================
// WEATHER DOM
// ======================================

const weatherButton = document.getElementById("weather-btn");

const weatherResult = document.getElementById("weather-result");

async function loadWeather() {
  weatherResult.innerHTML = "<p>Loading weather...</p>";

  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=9.56&longitude=44.06&current_weather=true",
    );

    const data = await response.json();

    weatherResult.innerHTML = `
      <h2>
        ${data.current_weather.temperature}°C
      </h2>
    `;
  } catch (error) {
    weatherResult.innerHTML = "<p>Weather unavailable.</p>";
  }
}

weatherButton.addEventListener("click", loadWeather);
