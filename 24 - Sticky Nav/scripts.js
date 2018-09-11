const nav = document.querySelector('#main');
let topOfnav = nav.offsetTop;

function fixNav() {
  console.log(topOfnav);
  if (window.scrollY >= topOfnav) {
    // nav.offsetHeight === the height of the nav element
    document.body.style.paddingTop = ` ${nav.offsetHeight}px`;
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

function grabTopNav() {
  topOfnav = nav.offsetTop;
  console.log(topOfnav);
}

window.addEventListener('scroll', fixNav);
window.addEventListener('resize', grabTopNav);

// 1. Find where the nav is relative to the top of the page
// 2. add class once the top of the nav hits the top of viewport
// 3. fixed-nav -CLASS : adds [position: fixed]
// 4. This reflows all elements around it.
// 5. SOLUTION add offset [nav.offsetHeight] to elements around it only when fixed-nav class applied

// TIP cant animate [width] but you can animate max-width.
// There is a "Zoom" effect when scrolling | This is done with scale
// When the class is applied change from transform: scale(0.98) to transform: scale(1);
