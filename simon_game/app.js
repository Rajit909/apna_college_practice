let h2 = document.querySelector("h2");

let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];


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
 };


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log("gameSeq",gameSeq);
    // random btn flash
    gameFlash(randBtn);
    
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000)
        }
    }else{
        h2.innerHTML = `<marquee behavior="alternate" direction="left" width="350px"> Game over! Your score was <b>${level}</b>.</marquee> </br><marquee behavior="alternate" direction="right" width="260px"> Press any key to start.</marquee>`;
        reset();
    }
};

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    console.log("Useseq",userSeq);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
};

let reset = ()=> {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}