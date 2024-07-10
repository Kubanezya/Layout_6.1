let blockName = document.querySelector('.left-nav');
let btnOpn = document.querySelector('.round-icon_burger');
let btnCls = blockName.querySelector('.round-icon_close');

btnOpn.onclick = function(){
    blockName.style.display = 'block';
}


btnCls.onclick = function(){
    blockName.style.display = 'none';
}

