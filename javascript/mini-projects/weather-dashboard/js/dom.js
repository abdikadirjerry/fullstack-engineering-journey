const weatherCard = document.getElementById("weather-card");
const errorBanner = document.getElementById("error-banner");

export function updateWeatherUI(meta, metrics) {
  document.getElementById("location-name").textContent =
    `${meta.name}, ${meta.country}`;
  document.getElementById("temp-display").textContent =
    `${Math.round(metrics.temp)}°C`;
  document.getElementById("wind-metric").textContent =
    `${metrics.windspeed} km/h`;
  document.getElementById("code-metric").textContent = metrics.weathercode;
  document.getElementById("weather-condition").textContent =
    parseWeatherCondition(metrics.weathercode);

  weatherCard.classList.remove("hidden");
  errorBanner.classList.add("hidden");
}

export function displaySearchError() {
  weatherCard.classList.add("hidden");
  errorBanner.classList.remove("hidden");
}

export function resetUIState() {
  errorBanner.classList.add("hidden");
}

function parseWeatherCondition(code) {
  if (code === 0) return "Clear Sky";
  if (code <= 3) return "Partly Cloudy";
  if (code <= 48) return "Foggy details";
  if (code <= 65) return "Drizzle / Rain";
  return "Stormy Conditions";
}
