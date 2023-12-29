
let h2 = document.querySelector("h2")

let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"]


let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if (started == false) {
        
        // started = true;
        levelUp();
        
    }
})


 function btnFlash(btn){
    console.log(btn.classList.add("flash"));
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    }, 150);
 }


function levelUp(){
    level++;
    h2.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    console.log(randIdx);
    // random btn flash
    btnFlash(randBtn);
}

function btnPress(){
    console.log("Pressed");
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}