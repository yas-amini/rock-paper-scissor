// Step 1 and 2: getUserChoice function
const getUserChoice = (userInput) => {
  // Convert userInput to lowercase
  userInput = userInput.toLowerCase();

  // Check if userInput is a valid choice
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error: Please choose between 'rock', 'paper', or 'scissors'.");
  }
};

// Step 4: Test getUserChoice function
console.log(getUserChoice("Rock")); // Output: rock
console.log(getUserChoice("Paper")); // Output: paper
console.log(getUserChoice("Scissors")); // Output: scissors

// Step 5: getComputerChoice function
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "rock"; // Default choice, should not happen
  }
};

// Step 6: Test getComputerChoice function
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

// Step 7: determineWinner function
const determineWinner = (userChoice, computerChoice) => {
  // Check for a tie
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check for other conditions
  if (userChoice === "rock") {
    // Check if computer chose 'paper' or 'scissors'
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  } else if (userChoice === "paper") {
    // Check if computer chose 'scissors' or 'rock'
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  } else if (userChoice === "scissors") {
    // Check if computer chose 'rock' or 'paper'
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
};

// Step 12: playGame function
const playGame = () => {
  // Get userChoice and computerChoice
  const userChoice = getUserChoice("rock"); // You can pass 'rock', 'paper', or 'scissors'
  const computerChoice = getComputerChoice();

  // Log choices to the console
  console.log(`User's choice: ${userChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);

  // Step 13: Determine and log the winner
  console.log(determineWinner(userChoice, computerChoice));
};

// Step 14: Call the playGame function to start the game
playGame();
