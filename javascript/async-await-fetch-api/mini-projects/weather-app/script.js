// ======================================
// WEATHER APP
// ======================================

const button = document.getElementById("weather-btn");

const result = document.getElementById("result");

async function loadWeather() {
  result.innerText = "Loading weather...";

  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=9.56&longitude=44.06&current_weather=true",
    );

    const data = await response.json();

    result.innerText = `Temperature: ${data.current_weather.temperature}°C`;
  } catch (error) {
    result.innerText = "Failed to load weather";
  }
}

button.addEventListener("click", loadWeather);
