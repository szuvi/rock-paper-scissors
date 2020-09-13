(function game() {
  const GAME = {
    rock: {
      paper: false,
      scissors: true,
    },
    paper: {
      rock: true,
      scissors: false,
    },
    scissors: {
      rock: false,
      papper: true,
    },
  };

  let score = 0;

  for (let i = 0; i < 5; i++) {
    let match = playRound();
    console.log(match.message);
    score += +match.result;
  }
  console.log(`The final score is ${score}!`);

  function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
      return {
        result: false,
        message: "It's a draw!",
      };
    }

    return {
      result: GAME[playerSelection][computerSelection],
      message: GAME[playerSelection][computerSelection]
        ? `You Win! ${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
          } beats ${computerSelection}!`
        : `You Lose! ${
            computerSelection.charAt(0).toUpperCase() +
            computerSelection.slice(1)
          } beats ${playerSelection}!`,
    };
  }

  function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100) % 3;
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function playerPlay() {
    let userInput = prompt("Input rock/paper/scissors");
    userInput = userInput.toLowerCase();
    if (
      userInput !== "rock" &&
      userInput !== "paper" &&
      userInput !== "scissors"
    ) {
      console.log("Wrong input! I choose random sign for you!");
      return computerPlay();
    } else {
      return userInput;
    }
  }
})();