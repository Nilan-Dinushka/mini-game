const blockElm = document.querySelector('#block');

const speed = 10;

setInterval(function(){
    if(blockElm.offsetLeft === 0)blockElm.style.left = '400px';
    blockElm.style.left = `${blockElm.offsetLeft - speed}px`;
    

},100)