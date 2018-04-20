const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55'; // color/gradient/patter
ctx.lineJoin = 'round'; //type of corner when two lines meet
ctx.lineCap = 'round'; // style of the end of line