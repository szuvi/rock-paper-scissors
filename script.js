(function () {
  const gameWin = {
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
  let round = 1;

  function playGame(event) {
    const roundResult = playRound(event);
    score += +roundResult.win;
    showMessage(roundResult.win, roundResult.message);
    round++;
    if (round > 5) {
      showFinalMessage();
      round = 1;
      score = 0;
    }
    updateStats();
  }

  function playRound(event) {
    let playerSelection = event.target.dataset.value;
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
      return {
        win: false,
        message: "It's a draw!",
      };
    }

    return {
      win: gameWin[playerSelection][computerSelection],
      message: gameWin[playerSelection][computerSelection]
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

  function updateStats() {
    scoreOutput.textContent = score;
    roundOutput.textContent = round;
  }

  function showMessage(win, message) {
    messageOutput.textContent = message;
    if (win) {
      messageOutput.classList.remove("loose");
      messageOutput.classList.add("win");
    } else {
      messageOutput.classList.add("loose");
      messageOutput.classList.remove("win");
    }
  }

  function showFinalMessage() {
    toggleBoxes();
    finalMessageOutput.textContent = `Final result is ${score} out of ${
      round - 1
    } games.`;
  }

  function toggleBoxes() {
    mainContainer.classList.toggle("hidden");
    finalContainer.classList.toggle("hidden");
  }

  function playAgain() {
    showMessage(); // Clears last game's message
    toggleBoxes();
  }

  // UI selectors

  const mainContainer = document.querySelector(".container");
  const finalContainer = document.querySelector(".final-box");
  const scoreOutput = document.querySelector(".score");
  const roundOutput = document.querySelector(".round");
  const messageOutput = document.querySelector(".message");
  const finalMessageOutput = document.querySelector(".final-message");
  const playerSelection = document.querySelectorAll(".selection");
  const playAgainButton = document.querySelector(".final-button");

  // Event Listeners

  playerSelection.forEach((selection) => {
    selection.addEventListener("click", playGame);
  });

  playAgainButton.addEventListener("click", playAgain);

  updateStats(); // Set initial stats
})();
