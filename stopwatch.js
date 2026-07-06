var time = 0;
var interval = null;

var display = document.getElementById("display");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
  display.innerText = time;
}

startBtn.onclick = function() {
  // Only start if it's not already running and time is less than 30
  if (interval === null && time < 30) {
    interval = setInterval(function() {
      time += 3;
      updateDisplay();
      
      // Stop automatically when reaching 30
      if (time >= 30) {
        clearInterval(interval);
        interval = null;
      }
    }, 1000); // Wait 1 second before each increment
  }
};

stopBtn.onclick = function() {
  // Pause the timer
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
  }
};

resetBtn.onclick = function() {
  // Stop and reset to 0
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
  }
  time = 0;
  updateDisplay();
};
