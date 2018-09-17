let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();

  const adjustedHour = hour > 12 ? hour - 12 : hour;
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function timer(seconds) {
  // Clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

// Handle Minutes input
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});

// 1. Obtain current time and when the timer should be finished
// 2. Create setInterval to calculate how long till time is up
// 3. Stop the setInterval at 0 set the entire setInterval to
//    countdown variable and clearInterval(countdown) on the if statement.
// 4. Create displayTimeLeft function | Here you will calculate how much time is left
//    Then append this info to both elements and document.title
// 5. Create displayEndTime pass in ending time and use this in new Date(HERE)
//    From here use .getHours() and .getMinutes() to grab both minutes and hours
// 6. Append all this information into endTime element.
// 7. Grab all buttons and add and eventlistener on them
// 8. In the HTML there is a data-time attribute w/ the amount of time the button is for
// 9. When a button is pressed grab the value of the data-time w/ this.dataset.time
//    and convert to a number value. Pass this value into the timer function
// 10.
