// ======================================
// CHALLENGE 2
// WEATHER FETCH
// ======================================

async function loadWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=9.56&longitude=44.06&current_weather=true",
    );

    const weather = await response.json();

    console.log(weather);
  } catch (error) {
    console.log(error);
  }
}

loadWeather();
