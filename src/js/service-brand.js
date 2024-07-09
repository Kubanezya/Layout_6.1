
let blockName = document.querySelector('.service-brand');
let btnMore = blockName.querySelector('.btn-more');
let iconShow = blockName.querySelector('.icon-show');
let swpHght = blockName.querySelector('.swiper-brand');
btnMore.onclick = function(){
     if (btnMore.textContent == 'Показать все'){
        btnMore.textContent='Скрыть';
        iconShow.style.transform='rotate(180deg)';
        swpHght.style.height='auto';
    }
     else{
        btnMore.textContent='Показать все';
        iconShow.style.transform='rotate(0deg)'
        swpHght.style.height='210px';
    }
    };


    const swiperBrand = document.querySelector('.swiper-brand');
    let mySwiperBrand;
    
    function mobileSliderBrand(){
      if (window.innerWidth < 768 && swiperBrand.dataset.mobile == 'false') {  
        mySwiperBrand = new Swiper(swiperBrand, {
        direction: 'horizontal',
        slidesOffsetBefore: 16,
        loop: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
        pagination: {
        el: '.swiper-pagination',
        clickable: ' true' ,
        }
    });
     swiperBrand.dataset.mobile = 'true';
     swiperBrand.style.height = '120px'; 
    }
    
    if (window.innerWidth >= 768) {
      swiperBrand.dataset.mobile = 'false';
      
      
      if(swiperBrand.classList.contains('swiper-initialized')){
        mySwiperBrand.destroy(true, true);
        }
      }
    }
    
    mobileSliderBrand();
    
    window.addEventListener('resize', () => {
      mobileSliderBrand();
     
    });
    