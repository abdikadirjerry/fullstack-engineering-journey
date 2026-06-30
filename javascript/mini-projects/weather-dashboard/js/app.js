import { handleThemeToggle } from "./theme.js";
import { locateCityCoordinates, fetchCurrentMetrics } from "./api.js";
import { updateWeatherUI, displaySearchError, resetUIState } from "./dom.js";
import { Storage } from "./storage.js";

let searchHistory = Storage.get("search-history", []);

document.addEventListener("DOMContentLoaded", () => {
  handleThemeToggle();
  renderHistoryUI();

  const searchBtn = document.getElementById("search-btn");
  const cityInput = document.getElementById("city-input");
  const clearBtn = document.getElementById("clear-history-btn");

  searchBtn.addEventListener("click", executeSearch);
  clearBtn.addEventListener("click", clearHistoryRecords);

  async function executeSearch() {
    const queryValue = cityInput.value.trim();
    if (!queryValue) return;

    resetUIState();

    try {
      const coordinates = await locateCityCoordinates(queryValue);
      if (!coordinates) {
        displaySearchError();
        return;
      }

      const metrics = await fetchCurrentMetrics(
        coordinates.latitude,
        coordinates.longitude,
      );
      updateWeatherUI(coordinates, metrics);
      appendHistoryRecord(coordinates.name);
    } catch (error) {
      console.error(error);
      displaySearchError();
    }
  }

  function appendHistoryRecord(name) {
    if (!searchHistory.includes(name)) {
      searchHistory.unshift(name);
      searchHistory = searchHistory.slice(0, 5); // Keep last 5 records
      Storage.set("search-history", searchHistory);
      renderHistoryUI();
    }
  }

  function renderHistoryUI() {
    const listContainer = document.getElementById("history-list");
    const clearBtn = document.getElementById("clear-history-btn");
    listContainer.innerHTML = "";

    if (searchHistory.length === 0) {
      clearBtn.classList.add("hidden");
      return;
    }

    clearBtn.classList.remove("hidden");
    searchHistory.forEach((city) => {
      const item = document.createElement("li");
      item.textContent = city;
      item.addEventListener("click", () => {
        cityInput.value = city;
        executeSearch();
      });
      listContainer.appendChild(item);
    });
  }

  function clearHistoryRecords() {
    searchHistory = [];
    Storage.set("search-history", []);
    renderHistoryUI();
  }
});
