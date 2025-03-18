playGame();

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) playRound(getHumanChoice(), getComputerChoice());

  console.log(`\nscore: human - ${humanScore}, computer - ${computerScore}`);

  function playRound(humanChoice, computerChoice) {
    humanChoice =
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    console.log(
      `\nhumanChoice: ${humanChoice}, computerChoice: ${computerChoice}`
    );
    if (humanChoice === computerChoice) {
      console.log(`Tie! ${humanChoice} equals ${computerChoice}`);

      return `Tie! ${humanChoice} equals ${computerChoice}`;
    } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);

      return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore += 1;
      console.log(`You loose! ${computerChoice} beats ${humanChoice}`);

      return `You loose! ${computerChoice} beats ${humanChoice}`;
    }
  }
}
