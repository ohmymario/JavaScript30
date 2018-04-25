// Helps Performance
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Grab Images
const sliderImages = document.querySelectorAll('.slide-in')

// Obtain value of Middle and Bottom of images relative to page
function checkslide(e) {
  
  sliderImages.forEach(sliderImage => {
    // Middle of image
    // (how far scrolled down + viewport) - half of the image height
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    
    console.log("************************")
    console.log(`innerHeight ${window.innerHeight}`);
    console.log(`scrollY ${window.scrollY}`);
    console.log(`scrollY + innerHeight ${(window.scrollY + window.innerHeight)}`);
    console.log(`Image Height / 2 ${(sliderImage.height / 2)}`)
    console.log(`slideInAt ${slideInAt}`);

    // Bottom of image | offsetTop = how far from top of page | height = height of image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast  = window.screenY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
    
  })
}

// debounce | reduce the amount of function calls for performance
window.addEventListener('scroll', debounce(checkslide))