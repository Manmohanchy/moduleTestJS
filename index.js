let cont=document.querySelectorAll(".cont");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user")
let comp=document.querySelector(".comp")
let winner=document.querySelector(".win-cont")
let ruleBtn=document.querySelector(".rule-btn")
let gameRule=document.querySelector(".rule-cont")
let crossBtn=document.querySelector(".cut-btn")
let result=document.querySelector(".result")
let playAgain=document.querySelector(".playAgain-btn")
let replay=document.querySelector(".replay")
let nextBtn=document.querySelector(".next-btn")
let against=document.querySelector(".against")
let hurray=document.querySelector(".hurray-page")
let container=document.querySelector(".container-1")
let gameCont=document.querySelector(".game-cont")
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle")

const computerScoreElement = document.querySelector(".compScore span");
const yourScoreElement = document.querySelector(".yourScore span");


let computerScore = localStorage.getItem("computerScore") ? parseInt(localStorage.getItem("computerScore")) : 0;
let yourScore = localStorage.getItem("yourScore") ? parseInt(localStorage.getItem("yourScore")) : 0;


computerScoreElement.textContent = computerScore;
yourScoreElement.textContent = yourScore;

cont.forEach((element,index) => {
    element.addEventListener("click",()=>{
        user.style.opacity="1"
        triangle.style.display="none"

        cont.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block"
        element.classList.add("show")
        setTimeout(()=>{
            comp.style.opacity="1"

            setTimeout(()=>{
                computer[random].style.display="block";
                computer[random].classList.add("right");
            },1000)
            setTimeout(()=>{
                const choices = ['rock', 'paper', 'scissors'];

                if ((choices[index] == 'rock' && choices[random] == 'scissors') ||
                    (choices[index] == 'scissors' && choices[random] == 'paper') ||
                    (choices[index] == 'paper' && choices[random] == 'rock')) {
                  
                   winner.style.display="block"
                    result.innerText="YOU WIN"
                    nextBtn.style.display="block"
                    replay.style.display="none"
                    yourScore++;
                 localStorage.setItem("yourScore", yourScore);
                 yourScoreElement.textContent = yourScore;

                } else if ((choices[index] == 'rock' && choices[random] == 'paper') ||
                           (choices[index] == 'paper' && choices[random] == 'scissors') ||
                           (choices[index] == 'scissors' && choices[random] == 'rock')) {
                  
                   winner.style.display="block"
                    result.innerText="YOU LOSS"
                     replay.style.display="none"
                    
                    computerScore++;
                    localStorage.setItem("computerScore", computerScore);
                    computerScoreElement.textContent = computerScore;

                }  else if (choices[index] == choices[random]) {
                     winner.style.display="block"
                   result.innerText="TIE UP"
                   against.style.display="none"
                   playAgain.style.display="none"

                }
               },2000)

        },500)
    })

});

ruleBtn.addEventListener("click",()=>{

    gameRule.style.display="flex"
})

crossBtn.addEventListener("click",()=>{
    gameRule.style.display="none"
})

playAgain.addEventListener("click",()=>{
    window.location.reload();
})

replay.addEventListener("click",()=>{
    window.location.reload();
})


nextBtn.addEventListener("click",()=>{

    hurray.style.display="flex"
     result.innerText=""
     against.style.display="none"
      triangle.style.display="none"
       winner.style.display="block"
      nextBtn.style.display="none"

     container.style.opacity="0"
     gameCont.style.opacity="0"
})





