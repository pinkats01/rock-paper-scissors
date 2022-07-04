let things= ["Rock", "Paper", "Scissor"];

        let playerScore= 0;
        let computerScore= 0;


        function playRound(){
           /*let playerSelection= prompt("Choose your player from:\n Rock, Paper, Scissors", "").toLowerCase();*/
           

           if(playerSelection==computerSelection){
                return("Both players chose the same thing.")
            }
            else if(playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock"
                    || playerSelection=="scissors" && computerSelection=="paper"){
                playerScore++;
                return(`You won!!\n The player: ${playerSelection} \n the computer chose: ${computerSelection}.\n Your score: ${playerScore}, The computer score:${computerScore}`);
            }
            else {
                computerScore++;
                return(`The computer won,\n The player: ${playerSelection} \n the computer chose: ${computerSelection}.\n Your score:${playerScore}, The computer score:${computerScore}`);  
            } 
        }
        
        function game(){
            for(let i=0; i<5; i++){
               console.log(playRound());
            }
        }
        
        let rock= document.querySelector('.rock');
        let paper= document.querySelector('.paper');
        let scissor= document.querySelector('.scissor');

        let selection= [rock, paper, scissor];
        selection.forEach(select => select.addEventListener('click', computerPlay));

       /* computerSelectorLoading(){
          let computerSelector= [rock, paper, scissor];

        }*/

        function computerPlay(){
         let computerSelection= things[Math.floor(Math.random()*things.length)].toLowerCase();
         let img= document.createElement("img");
         img.src= `../images/${computerSelection}.png`
         img.height= 150;
         img.width= 150;
         img.style.cssText= 'top: 30px, left:30px, position: relative';
         document.getElementById('computer-selection').appendChild(img);

         /*let computerBox= document.getElementById('computer-selection');
         computerBox.classList.add('computer-choice');*/
         let computerLogo= document.getElementById('computer-logo');
         computerLogo.remove();
        }
