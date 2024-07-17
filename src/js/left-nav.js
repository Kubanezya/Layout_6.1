let blockName = document.querySelector('.left-nav');
let btnOpn = document.querySelector('.round-icon_burger');
let btnCls = blockName.querySelector('.btn-cls');
let btnCls2 = blockName.querySelector('.round-icon_close');
let body =   document.querySelector('.body');

btnOpn.onclick = function(){
    blockName.style.display = 'block';
    body.classList.add('hidden');
    /*if (window.innerWidth < 768){
        body.classList.add('hidden');
    };
    */
}

btnCls.onclick = function() {
    blockName.style.display = 'none';
    body.classList.remove('hidden');
}
 

btnCls2.onclick = function(){
    blockName.style.display = 'none';
    body.classList.remove('hidden');
}
  