const swiperPrice = document.querySelector('.swiper-price');
if (window.innerWidth < 768) {  
    mySwiper = new Swiper(swiperPrice, {
        direction: 'horizontal',
        slidesOffsetBefore: 6,     
        loop: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: ' true' ,
        }
    });
}    
