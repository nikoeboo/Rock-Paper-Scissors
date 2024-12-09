let computersMove='', usersMove='';

let Wins=0, Losses=0, Ties=0, Result='';

loadScores();

updateDisplay();

function ComputerMoves(){
  let choice=Math.floor(Math.random()*3);

  if(choice === 1)
    computersMove = "rock";

  if(choice === 2)
    computersMove = "paper";

  if(choice === 3)
    computersMove = "scissors";
}

function Match(move){

  usersMove=move;

  ComputerMoves();

  if(usersMove ===computersMove) {
    Ties++;
    Result='Tie.';
  }

  else if((usersMove === 'rock' && computersMove === "scissors") || 
  (usersMove === 'paper' && computersMove === "rock") ||
  (usersMove === 'scissors' && computersMove === "paper")){
    Wins++;
    Result="You won.";
  }

  else {
    Losses++;
    Result="You lost.";
  }

  saveScores();

  updateDisplay();
}

function resetScores(){
  Wins=0;
  Losses=0;
  Ties=0;

  Result='';
  usersMove='';
  computersMove='';
  
  saveScores();
  updateDisplay();
}

function saveScores(){
  localStorage.setItem('Wins', Wins);
  localStorage.setItem('Losses', Losses);
  localStorage.setItem('Ties', Ties);
}

function loadScores(){
  Wins = Number(localStorage.getItem('Wins')) || 0;
  Losses = Number(localStorage.getItem('Losses')) || 0;
  Ties = Number(localStorage.getItem('Ties')) || 0;
}

function updateDisplay(){
  document.getElementById('Scores').textContent = `Wins: ${Wins}, Losses: ${Losses}, Ties: ${Ties}`;

  document.getElementById('Result').textContent = `${Result}`;

  if(usersMove !== '' && computersMove !== '')
    displayMoves();
}

function displayMoves(){
  if (usersMove == 'rock' && computersMove == 'paper') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> Computer';
  }
  if (usersMove == 'rock' && computersMove == 'scissors') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> Computer';
  }
  if (usersMove == 'rock' && computersMove == 'rock') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> Computer';
  }
  if (usersMove == 'paper' && computersMove == 'rock') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> Computer';
  }
  if (usersMove == 'scissors' && computersMove == 'rock') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> Computer';
  }
  if (usersMove == 'paper' && computersMove == 'paper') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> Computer';
  }
  if (usersMove == 'paper' && computersMove == 'scissors') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> Computer';
  }
  if (usersMove == 'scissors' && computersMove == 'paper') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> Computer';
  }
  if (usersMove == 'scissors' && computersMove == 'scissors') {
    document.getElementById('Moves').innerHTML = 'You <img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> <img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> Computer';
  }
}