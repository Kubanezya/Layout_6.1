
let blockName = document.querySelector('.information');
let btnMore = blockName.querySelector('.btn-more');
let iconShow = blockName.querySelector('.icon-show');
let swpHght = blockName.querySelector('.information__item_text');

btnMore.onclick = function(){
     if (btnMore.textContent == '<span class="icon-show">Читать далее'){
        btnMore.textContent='Скрыть';        
        iconShow.style.transform='rotate(180deg)';
        swpHght.style.height='auto';
    }
     else{
        btnMore.textContent='<span class="icon-show">Читать далее';
        iconShow.style.transform='rotate(0deg)'
        swpHght.style.height='150px';
    }
    };
