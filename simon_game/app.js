
let h2 = document.querySelector("h2")

let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"]


let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if (started == false) {
        started = true;
        levelUp();
        
    }
})

 function gameFlash(btn){
    
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    }, 150);
 }
 function userFlash(btn){

    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    }, 150);
 }


function levelUp(){
    level++;
    h2.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    
    gameSeq.push(randColor)
    console.log(gameSeq);
    // random btn flash
    gameFlash(randBtn);
    
}

function checkAns(){
    // let idx = level - 1;
    // console.log(idx);

    // if (userSeq[idx] === gameSeq[idx]) {
    //     console.log("game over");
    // }else{
    //     h2.innerText = 'Game over'
    // }
    
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn)
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor)
    checkAns();
    // console.log(userSeq);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

