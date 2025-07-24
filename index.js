let btn1 = document.querySelector("#rock");
let btn2 = document.querySelector("#paper");
let btn3 = document.querySelector("#scissors");
let userScore = document.querySelector("#user");
let compScore = document.querySelector("#comp");
let countUserScore=0;
let countCompScore=0;
let p = document.querySelector(".display_msg");
let resetButton = document.querySelector("#reset");
const finalWinner = (userChoice,compChoice) => {
           // User Win pattern!
    if(userChoice===compChoice){
        p.innerText = `[Same choice by both players!]`;
    }else{
        p.innerText = `[user: ${userChoice} , comp: ${compChoice}]`;
    }
    if(userChoice==="rock" && compChoice==="scissors"){
        userScore.innerText = ++countUserScore;
    }
    else if(userChoice==="scissors" && compChoice==="rock"){
        compScore.innerText = ++countCompScore;
    }
    else if(userChoice==="paper" && compChoice==="rock"){
        userScore.innerText = ++countUserScore;
    }
    else if(userChoice==="rock" && compChoice==="paper"){
        compScore.innerText = ++countCompScore;
    }
    else if(userChoice==="scissors" && compChoice==="paper"){
        userScore.innerText = ++countUserScore;
    }
    else if(userChoice==="paper" && compChoice==="scissors"){
        compScore.innerText = ++countCompScore;
    }
     // Comp Win Pattern!
    else if(compChoice==="rock" && userChoice==="scissors"){
        compScore.innerText = ++countCompScore;
     }
     else if(compChoice==="scissors" && userChoice==="rock"){
        userScore.innerText = ++countUserScore;
     }
     else if(compChoice==="paper" && userChoice==="rock"){
        compScore.innerText = ++countCompScore;
     }
     else if(compChoice==="rock" && userChoice==="paper"){
        userScore.innerText = ++countUserScore;
     }
     else if(compChoice==="scissors" && userChoice==="paper"){
        compScore.innerText = ++countCompScore;
     }
     else if(compChoice==="paper" && userChoice==="scissors"){
        userScore.innerText = ++countUserScore;
     }
    
}
let turns = 0;
const playGame = (userChoice) => {
     let random = ["rock","paper","scissors"];
     let randomNum = (Math.floor)(Math.random() * 3);
     let compChoice = random[randomNum];
     finalWinner(userChoice,compChoice);
     turns++;
     if(turns==5){
       let gameWinner = "Both have equal scores!";
        if(countUserScore > countCompScore){gameWinner="You have won the game!";}
       else if(countCompScore > countUserScore){gameWinner="Computer has won the game!";}
    alert(`After considering best of 5,your score: ${countUserScore} || comp score: ${countCompScore}`);
       btn1.disabled = true;
       btn2.disabled = true;
       btn3.disabled = true;
    alert("If you wants to start a new game,click on reset button");
    p.innerText = "";
     }
     resetButton.addEventListener("click", () =>{
        countUserScore=0;
        countCompScore=0;
        userScore.innerText=0;
        compScore.innerText=0;
        turns=0;
        p.innerText = "";
        btn1.disabled = false;
        btn2.disabled = false;
        btn3.disabled = false;
     })
}

   btn1.addEventListener("click", () => {
    let userChoice = btn1.getAttribute("id");
     playGame(userChoice);
});

btn2.addEventListener("click", () => {
    let userChoice = btn2.getAttribute("id");
    playGame(userChoice);
});

btn3.addEventListener("click", () => {
    let userChoice = btn3.getAttribute("id");
    playGame(userChoice);
});


    
