const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  console.log(secondsDegrees);
  if(secondsDegrees === 90) {
    secondHand.style.transition = "all 0s cubic-bezier(0, 1.43, 0.58, 1)";
  } else {
    secondHand.style.transition = `all 0.5s cubic-bezier(0, 1.43, 0.58, 1)`;
  } 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  // Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

  // Hour
  const militaryHours = now.getHours();
  const hour = ((militaryHours + 11) % 12 + 1);

  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(setDate, 1000);