const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; // color/gradient/patter
ctx.lineJoin = 'round'; //type of corner when two lines meet
ctx.lineCap = 'round'; // style of the end of line

let isDrawing = false; // Flag to determine if drawing to canvas
let lastX = 0; // Begin of line
let lastY = 0; // End of line

function draw(e) {
  console.log('mousemove is working');
  if (!isDrawing) return; // if isDrawing is false|stop the function

  console.log(e);

  ctx.beginPath();
  // Start From
  ctx.moveTo(lastX, lastY); 
  // Go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  // Once done with line update the last place they were at
  lastX = e.offsetX;
  lastY = e.offsetY;

}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true

  // Update where you pressed mousedown at
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);