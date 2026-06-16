let seconds = 1500;

let interval;

const timer = document.getElementById("timer");

function updateTimer() {
  const minutes = Math.floor(seconds / 60);

  const secs = seconds % 60;

  timer.textContent = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

document.getElementById("start-timer").addEventListener("click", () => {
  clearInterval(interval);

  interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;

      updateTimer();
    }
  }, 1000);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  seconds = 1500;

  updateTimer();
});

updateTimer();
