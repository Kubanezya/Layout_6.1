let blockName = document.querySelector('.service-category');
let btnMore = blockName.querySelector('.btn-more');
let btnMoreText = blockName.querySelector('.btn-more_text');
let btnMoreIcon = blockName.querySelector('.btn-more_icon');
let swpHght = blockName.querySelector('.swiper-category');

btnMore.onclick = function(){
        console.log('click')
     if (btnMoreText.textContent == 'Показать все'){
        btnMoreText.textContent='Скрыть';        
        btnMoreIcon.style.transform='rotate(180deg)';
        swpHght.style.height='auto';
        
    }
     else{
        btnMoreText.textContent='Показать все';
        btnMoreIcon.style.transform='rotate(0deg)'
        swpHght.style.height='200px';
    }
};


const swiperCategory = document.querySelector('.swiper-category');
let myswiperCategory;

function mobileSliderCategory(){
  if (window.innerWidth < 768 && swiperCategory.dataset.mobile == 'false') {  
    myswiperCategory = new Swiper(swiperCategory, {
    direction: 'horizontal',
    slidesOffsetBefore: 8, 
    
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


