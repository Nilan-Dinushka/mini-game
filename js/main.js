const blockElm = document.querySelector('#block');
const holeElm = document.querySelector('#hole');
const characterElm = document.querySelector('#character');
const gameElm = document.querySelector('#game');
let jumping = 0;
let count = 0;

const speed = 10;

setInterval(function(){
    
    blockElm.style.left = `${blockElm.offsetLeft - speed}px`;
    if(blockElm.style.left <= `-50px`){
        blockElm.style.left = `400px`;
        count ++;
    }


},50);

setInterval(function(){

    
    holeElm.style.left = `${holeElm.offsetLeft - speed}px`;
    if(holeElm.style.left <= `-50px`){
        let randomHeight = -((Math.random()*300) + 150);
        holeElm.style.top = randomHeight + 'px';
        holeElm.style.left = `400px`;
    }
 

},50);

setInterval(function(){
    if(jumping === 0){
        characterElm.style.top = `${characterElm.offsetTop + 3}px`;
    }
   
    if((characterElm.offsetTop > 480) || ((blockElm.offsetLeft < 20) && (blockElm.offsetLeft > -50) && ((characterElm.offsetTop < holeElm.offsetTop) || (characterElm.offsetTop > holeElm.offsetTop+130))) ){
        showMarks(count);

        alert("Game over. Score: " + count);
        characterElm.style.top = 100 + 'px'
        count = 0;
        blockElm.style.left = `400px`;
        holeElm.style.left = `400px`;
    }

},10)

// addEventListener('keydown', (e) => {
//     if(e.key === 'ArrowUp'){
//         characterElm.style.top = `${characterElm.offsetTop - 5}px`;
//         console.log(e.key);
//     }   
// })

function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        if((characterElm.offsetTop) > 6 && (jumpCount < 15)){
            characterElm.style.top = `${characterElm.offsetTop - 5 }px`;
        }
        if(jumpCount > 20){
            clearInterval(jumpInterval)
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    },10)
}

function showMarks(score) {
    const divElm = document.createElement('div');
        divElm.innerHTML = `GAME OVER<br>
                            SCORE: ${score}`;
        gameElm.prepend(divElm);
    divElm.style.position = 'absolute';
    divElm.style.top = 250 + 'px';
    divElm.style.left = 200 + 'px';

}