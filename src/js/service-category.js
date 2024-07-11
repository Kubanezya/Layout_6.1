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
        swpHght.style.height='200px';
    }
};


const swiperCategory = document.querySelector('.swiper-category');
let myswiperCategory;

function mobileSliderCategory(){
  if (window.innerWidth < 768 && swiperCategory.dataset.mobile == 'false') {  
    myswiperCategory = new Swiper(swiperCategory, {
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
 swiperCategory.dataset.mobile = 'true';
 swiperCategory.style.height = '240px'; 
}

if (window.innerWidth >= 768) {
  swiperCategory.dataset.mobile = 'false';
  
  
  if(swiperCategory.classList.contains('swiper-initialized')){
    myswiperCategory.destroy(true, true);
    }
  }
}

mobileSliderCategory();

window.addEventListener('resize', () => {
  mobileSliderCategory();
 
});


