    let things= ["Rock", "Paper", "Scissors"];
       
    let rock= document.querySelector('.rock');
    let paper= document.querySelector('.paper');
    let scissors= document.querySelector('.scissors');

    let selection= [rock, paper, scissors];

    selection.forEach(select => select.addEventListener('click', e=> playRound(e)));

        // increment score
        let playerScore= document.getElementById('player-score');
        let computerScore= document.getElementById('computer-score');

        let playerScoreJs= 0;
        let computerScoreJs= 0;

        playerScore.innerHTML= playerScoreJs;
        computerScore.innerHTML= computerScoreJs;


        function playRound(e){
        let playerSelection= e.target.alt.toString();
        let computerSelection= things[Math.floor(Math.random()*things.length)].toLowerCase();

 

        if(playerSelection==computerSelection){
            alert('BOTH THE PLAYER AND THE COMPUTER CHOSE THE SAME THING');
            return;
        }
        else if(playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="paper" && computerSelection=="rock"
                || playerSelection=="scissors" && computerSelection=="paper"){
            playerScoreJs++; 
            playerScore.innerHTML= playerScoreJs;
        }
        else {
            computerScoreJs++;
            computerScore.innerHTML= computerScoreJs;
        } 
        if(playerScoreJs==5){
          window.location="rock-paper-scissor/html/player_won.html";
        }
        if(computerScoreJs==5){
            window.location="rock-paper-scissor/html/computer_won.html";
          }

          let img= document.createElement("img");
          img.src= `../images/${computerSelection}.png`
          img.height= 150;
          img.width= 150;
          img.style.cssText= 'top: 30px, left:30px, display:flex, flex-flow: row wrap';
          document.getElementById('computer-selection').appendChild(img);
          let computerLogo= document.getElementById('computer-logo');
          computerLogo?.remove(); 
    }

    let audio= new Audio('../sounds/computer_sound.mp3');

    function audioPlay(){
       audio.play();
       audio.currentTime= 0;
    };
    selection.forEach(select => select.addEventListener('click', audioPlay));

    //background music
     let backgroundMusic= document.getElementById('myAudio');

    function musicStart(){
        backgroundMusic.play();
    }
    selection.forEach(select => select.addEventListener('click', musicStart));



