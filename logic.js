//playGame();
const buttons = document.querySelector('.btn-container')
const result = document.querySelector('.results')

let humanScore = 0;
let computerScore = 0;

buttons.addEventListener('click', (event) => {
  const humanChoice = event.target.className
  result.textContent = playRound(humanChoice, getComputerChoice())
  if(humanScore >=5 || computerScore >=5){
    let ending = ''
    if(humanScore == computerScore){
      ending = 'Tie!'
    }else ending = humanScore > computerScore ? 'Win!' : 'Loose!'
    result.textContent = `${ending} Score: human - ${humanScore}, computer - ${computerScore}`
    humanScore = 0; computerScore = 0;
  }
})


function getComputerChoice() {
  random = Math.random();
  if (random < 1 / 3) {
    return "Rock";
  } else if (random < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
function getHumanChoice() {
  let choice = prompt("Choose: Rock / Paper / Scissors");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let result = "";
  humanChoice =
    humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  console.log(
    `\nhumanChoice: ${humanChoice}, computerChoice: ${computerChoice}`
  );
  if (humanChoice === computerChoice) {
    result = `Tie! ${humanChoice} equals ${computerChoice}`;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore += 1;
    result = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore += 1;
    result = `You loose! ${computerChoice} beats ${humanChoice}`;
  }
  console.log(result);
  return result;
}

function playGame() {
  for (let i = 0; i < 5; i++) playRound(getHumanChoice(), getComputerChoice());
  result.textContent = `Score: human - ${humanScore}, computer - ${computerScore}`

  console.log(`\nscore: human - ${humanScore}, computer - ${computerScore}`);

}
