// ======================================
// WEATHER DOM
// ======================================

const weatherButton = document.getElementById("weather-btn");

const weatherResult = document.getElementById("weather-result");

async function loadWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=9.56&longitude=44.06&current_weather=true",
  );

  const data = await response.json();

  weatherResult.innerHTML = `
    <h2>${data.current_weather.temperature}°C</h2>
  `;
}

weatherButton.addEventListener("click", loadWeather);
