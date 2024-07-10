let blockName = document.querySelector('.modal-call');
let btnOpn = document.querySelectorAll('.round-icon_call');
let btnCls = blockName.querySelectorAll('.btn-cls');


let openModal = function(){
    if (blockName.classList.contains('modal-call-hidden')){
        blockName.classList.remove('modal-call-hidden')}
        else{
            blockName.classList.add('modal-call-hidden');
            
        };        
    }  
    

btnOpn[0].onclick = openModal;
btnOpn[1].onclick = openModal;
btnCls[0].onclick = openModal;
btnCls[1].onclick = openModal; 



