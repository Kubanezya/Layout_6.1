let blockName = document.querySelector('.modal-feedback');
let btnOpn = document.querySelectorAll('.round-icon_chat');
let btnCls = blockName.querySelectorAll('.btn-cls');

let openModal = function(){
    if (blockName.classList.contains('modal-feedback-hidden')){
        blockName.classList.remove('modal-feedback-hidden')}        
        else{
        blockName.classList.add('modal-feedback-hidden');
        }
    };  
    

btnOpn[0].onclick = openModal;
btnOpn[1].onclick = openModal; 
btnCls[0].onclick = openModal;
btnCls[1].onclick = openModal; 
