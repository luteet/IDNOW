

const body = document.querySelector('body'),
    html = document.querySelector('html');



// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

let instructionInfo = new Swiper('.instruction__info', {
  
  spaceBetween: 15,
  slidesPerView: 1,
  allowTouchMove: false,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
}); 

let instructionImageSlider = new Swiper('.instruction__image-slider', {
  
  spaceBetween: 15,
  slidesPerView: 1,
  centeredSlides: false,
  

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: instructionInfo,
  }
});


let addOnsSlider = new Swiper('.add-ons__tab-slider', {
  
  spaceBetween: 15,
  slidesPerView: 1,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  
});

let addOnsTabSlider;

// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=



let thisTarget, checkTabActive = false;
body.addEventListener('click', function (event) {

    thisTarget = event.target;

    let slideBtn = thisTarget.closest('._slide-btn');
    if(slideBtn) {
      addOnsSlider.slideTo(Number(slideBtn.dataset.slideTo), 0)
    }
    

})







// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

let resizeCheck = {}, windowSize;

function resizeCheckFunc(size, minWidth, maxWidth) {
  if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
    resizeCheck[String(size)] = false;
    maxWidth(); // < size
  }

  if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
    resizeCheck[String(size)] = true;
    minWidth(); // > size
  }
}

function resize() {

  windowSize = window.innerWidth

  resizeCheckFunc(768,
    function () {  // screen > 768

      if(addOnsTabSlider) addOnsTabSlider.destroy(true, true);

  },
  function () {  // screen < 768

    addOnsTabSlider = new Swiper('.add-ons__tab-section--body', {
  
      spaceBetween: 15,
      slidesPerView: 1,
      
    
    });

  });

}

resize();

window.onresize = resize;

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=
