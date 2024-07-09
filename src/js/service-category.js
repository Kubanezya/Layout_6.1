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
