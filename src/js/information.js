
let blockName = document.querySelector('.information');
let btnMore = blockName.querySelector('.btn-more');
let btnMoreText = blockName.querySelector('.btn-more_text');
let btnMoreIcon = blockName.querySelector('.btn-more_icon');
let swpHght = blockName.querySelector('.information__item_text');

btnMore.onclick = function(){
        console.log('click')
     if (btnMoreText.textContent == 'Читать далее'){
        btnMoreText.textContent='Скрыть';        
        btnMoreIcon.style.transform='rotate(180deg)';
        swpHght.style.height='auto';
        
    }
     else{
        btnMoreText.textContent='Читать далее';
        btnMoreIcon.style.transform='rotate(0deg)'
        swpHght.style.height='150px';
    }
    };
