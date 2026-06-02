let timeLeft = 25 * 60;

let timerInterval = null;

const timerElement = document.getElementById("timer");

const startBtn = document.getElementById("start-btn");

const pauseBtn = document.getElementById("pause-btn");

const resetBtn = document.getElementById("reset-btn");

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  timerElement.innerText = `${String(minutes).padStart(2, "0")}
    :
    ${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      timerInterval = null;

      alert("Pomodoro Complete!");

      return;
    }

    timeLeft--;

    updateTimer();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);

  timerInterval = null;
}

function resetTimer() {
  pauseTimer();

  timeLeft = 25 * 60;

  updateTimer();
}

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);

updateTimer();
