const swiperPrice = document.querySelector('.swiper-price');
let myswiperPrice;

function mobileSliderPrice(){
  if (window.innerWidth < 768 && swiperPrice.dataset.mobile == 'false') {  
    myswiperPrice = new Swiper(swiperPrice, {
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
 swiperPrice.dataset.mobile = 'true';
 swiperPrice.style.height = '280px'; 
}

if (window.innerWidth >= 768) {
  swiperPrice.dataset.mobile = 'false';
  
  
  if(swiperPrice.classList.contains('swiper-initialized')){
    myswiperPrice.destroy(true, true);
    }
  }
}

mobileSliderPrice();

window.addEventListener('resize', () => {
  mobileSliderPrice();
 
});


