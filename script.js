/*let things= ["Rock", "Paper", "Scissors"];

        let playerScore= 0;
        let computerScore= 0;

        function computerPlay(){
         let computerSelection= things[Math.floor(Math.random()*things.length)];
         return(computerSelection);
        }

        function playRound(){
           let playerSelection= prompt("Choose your player from:\n Rock, Paper, Scissors", "").toLowerCase();
           let computerSelection=computerPlay().toLowerCase();

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
        console.log(game());*/