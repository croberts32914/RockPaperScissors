function playGame() {
    var playerChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    var computerChoice = getComputerChoice();
    var result = determineWinner(playerChoice, computerChoice);
    console.log("Player choice: " + playerChoice);
    console.log("Computer choice: " + computerChoice);
    console.log("Result: " + result);
  }

  function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer wins!";
      } else {
        return "Player wins!";
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer wins!";
      } else {
        return "Player wins!";
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer wins!";
      } else {
        return "Player wins!";
      }
    } else {
      return "Invalid choice. Please choose rock, paper, or scissors.";
    }
  }

  // Call the playGame function to start the game
  playGame();
