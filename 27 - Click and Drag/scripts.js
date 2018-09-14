const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
  if (!isDown) return; // Stop running if unneccesary
  // Stop browser from trying to select text while scolling with mouse
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.3;
  slider.scrollLeft = scrollLeft - walk;
});

// 1. Grab all mouse events within the elements with the class [items]
// 2. Change isDown variable | mouseleave/mouseup = false | mousedown = true
// 3. Add class active on mousedown | Remove on mouseleave/mouseup
// 4. Find where mouse was clicked using e.pageX. In this case there is padding of 100px
//    To offset this we use (e.pageX - slider.offsetLeft);
// 5. Grab scrollLeft = slider.scrollLeft find how far scrolled in
// 6. Find how far deviated from initial space with walk variable | If you move cursor to left
//    a negative value will appear | Move to the right a positive one will appear
