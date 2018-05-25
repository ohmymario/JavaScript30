const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// From array of list items array of string only holding the time
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [min, secs] = timeCode.split(':').map(parseFloat)
    return (min * 60) + secs;
  })
  .reduce((total , Vidseconds) => total + Vidseconds)

  let secondsLeft = seconds;

  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours, mins, secondsLeft);