const GEO_ENDPOINT = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_ENDPOINT = "https://api.open-meteo.com/v1/forecast";

export async function locateCityCoordinates(cityName) {
  const queryUrl = `${GEO_ENDPOINT}?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;
  const response = await fetch(queryUrl);
  const payload = await response.json();

  if (!payload.results || payload.results.length === 0) return null;
  return {
    latitude: payload.results[0].latitude,
    longitude: payload.results[0].longitude,
    name: payload.results[0].name,
    country: payload.results[0].country,
  };
}

export async function fetchCurrentMetrics(lat, lon) {
  const queryUrl = `${WEATHER_ENDPOINT}?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const response = await fetch(queryUrl);
  const payload = await response.json();

  return {
    temp: payload.current_weather.temperature,
    windspeed: payload.current_weather.windspeed,
    weathercode: payload.current_weather.weathercode,
  };
}
