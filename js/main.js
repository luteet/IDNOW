

const body = document.querySelector('body'),
    html = document.querySelector('html');



    function tab(elem) {

      checkTabActive = true;
  
      elem.closest('._tab-list').querySelectorAll('._tab-link').forEach(element => {
          element.classList.remove('_active');
      })
  
      elem.classList.add('_active');
      
      const tabLink = elem;
  
      let tabBlock, tabBlockActive, tabBlockParent;
      
      try {
          tabBlock = document.querySelector(tabLink.getAttribute('href'));
          tabBlockParent = tabBlock.parentNode;
          
          if(tabBlock.classList.contains('_active')) {
              checkTabActive = false;
              return false;
          }
  
          tabBlockActive = tabBlockParent.querySelector('._tab-block._active');
      } catch {
          return false;
      }
  
      const tabBlockList      = tabBlockParent.querySelectorAll('._tab-block');
  
      tabBlockParent.style.minHeight = tabBlockActive.offsetHeight + 'px';
      
      tabBlockActive.classList.add('_fade-out');
  
      setTimeout(function() {
  
          tabBlockList.forEach(element => {
              element.classList.remove('_active');
              element.classList.remove('_fade-out');
              element.classList.remove('_fade-in');
          });
  
          tabBlock.classList.add('_active');
  
      },200);
  
      setTimeout(function() {
          tabBlock.classList.add('_fade-in');
          
          tabBlockParent.style.minHeight = '0px';
  
          checkTabActive = false;
  
      },400);
  
  }



let thisTarget, checkTabActive = false;
body.addEventListener('click', function (event) {

    thisTarget = event.target;

    let tabLink = thisTarget.closest('._tab-link');
    if(tabLink) {
      event.preventDefault();
      if(checkTabActive == false) {
        tab(thisTarget);
      }
    }
    

})


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
  /* effect: 'fade',
  fadeEffect: {
    crossFade: true
  }, */
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: instructionInfo,
  }
}); 


// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

*/
