/*-------------------------------- Constants --------------------------------*/
//Tic Tac Toe Game: combination of variations when there is a winner / diagonal /straight etc.
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const squareElement = document.querySelectorAll(".sqr");
const messageElement = document.querySelector("#message");
const resetButtonElement = document.querySelector("#reset");
/*-------------------------------- Functions --------------------------------*/
const init = () => {
  console.log("init started");
  board = ["", "", "", "", "", "", "", "", ""];
  winner = false;
  tie = false;
  turn = "X";

  render();
};

init();

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((boardOutput, index) => {
    if (boardOutput === "X") {
      squareElement[index].textContent = "X";
    } else if (boardOutput === "O") {
      squareElement[index].textContent = "O";
    } else {
      squareElement[index].textContent = "";
    }
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    if (turn === "X") {
      messageElement.textContent = "Its X turn";
    } else {
      messageElement.textContent = "Its O turn";
    }
  } else if (winner === false && tie === true) {
    messageElement.textContent = "Its a tie";
  } else {
    if (turn === "X") {
      messageElement.textContent = "X Wins!";
    } else {
      messageElement.textContent = "O wins!";
    }
  }
}

/*----------------------------- Event Listeners -----------------------------*/

function handleClick(event) {
  //click on the board square, get the ID of the square 1,2,4
  const squareIndex = event.target.id;
  //if the square is filled, its not empty
  const squareFilled = board[squareIndex] !== "";

  //if a square is filled already, and game over, stop game
  if (squareFilled || winner) return;

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

squareElement.forEach((square) => {
  square.addEventListener("click", handleClick);
});

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  if (
    (board[0] !== "" && board[0] === board[1] && board[1] === board[2]) ||
    (board[3] !== "" && board[3] === board[4] && board[4] === board[5]) ||
    (board[6] !== "" && board[6] === board[7] && board[7] === board[8]) ||
    (board[0] !== "" && board[0] === board[3] && board[3] === board[6]) ||
    (board[1] !== "" && board[1] === board[4] && board[4] === board[7]) ||
    (board[2] !== "" && board[2] === board[5] && board[5] === board[8]) ||
    (board[0] !== "" && board[0] === board[4] && board[4] === board[8]) ||
    (board[2] !== "" && board[2] === board[4] && board[4] === board[6])
  ) {
    winner = true;
  }
}

function checkForTie() {
  if (winner) {
    return;
  } else if (board.includes("")) {
    tie = false;
  } else if (!board.includes("")) {
    tie = true;
  }
}

function switchPlayerTurn() {
  if (winner === true) {
    return;
  } else if (winner === false) {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
}

resetButtonElement.addEventListener("click", init);
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*----------------------------- User requirements -----------------------------*/

// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.
