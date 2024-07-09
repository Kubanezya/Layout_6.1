
let blockName = document.querySelector('.information');
let btnMore = blockName.querySelector('.btn-more');
let iconShow = blockName.querySelector('.icon-show');
let swpHght = blockName.querySelector('.info-text');
btnMore.onclick = function(){
     if (btnMore.textContent == 'Читать далее'){
        btnMore.textContent='Скрыть';
        iconShow.style.transform='rotate(180deg)';
        swpHght.style.maxHeight='100vh';
    }
     else{
        btnMore.textContent='Читать далее';
        iconShow.style.transform='rotate(0deg)'
        swpHght.style.maxHeight='24vw';
    }
    };
