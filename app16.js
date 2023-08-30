let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let h4=document.querySelector("h4");
let btns=["red","yellow","green","purple"];
let started=false;
let highestScore=0;
let level=0;
// step 1:
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelUp();
    }
    
});
function gameFlash(btn){
    btn.classList.add("flash");
      setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}
function userFlash(btn){
    btn.classList.add("userflash");
      setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}
function levelUp(){
    userSeq=[];
   level++;
   h2.innerText=(`Level ${level}`);
   //random
   let randIdx=Math.floor(Math.random()*3)+1;
   let randColor=btns[randIdx];
   let randBtn=document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
   if(level>highestScore){
    highestScore=level;
   }
//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);
   gameFlash(randBtn);
}
function checkAns(idx){
    // console.log("curr level",level);
    // let idx=level-1;
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length===userSeq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("Same Value");
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Please enter any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },250);
        reset();
    }
}
//step 3
function btnPress(){
    let btn=this;
    // console.log(btn);
    userFlash(btn);
    let userColor=this.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
    // const Highestscore=document.getElementById("highest");
    const Highestscore=document.querySelector("h4");
    Highestscore.innerText=`Highest Score: ${highestScore}`;

}