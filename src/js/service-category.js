let blockName = document.querySelector('.service-category');
let btnMore = blockName.querySelector('.btn-more');
let iconShow = blockName.querySelector('.icon-show');
let swpHght = blockName.querySelector('.swiper-category');
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

const swiperCategory = document.querySelector('.swiper-category');
if (window.innerWidth < 768) {  
    mySwiper = new Swiper(swiperCategory, {
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
}    