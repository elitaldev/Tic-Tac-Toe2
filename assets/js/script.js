
let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));



let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning-blocks"
);
// creat functionality for the game//

const o_TEXT = "O";
const x_TEXT = "X";

// we will start the game with X text //
let currentPlayer = x_TEXT;


// to track which box has been clicked //
let spaces = Array(9).fill(null);


// start the game //
const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
     // player has won the game //
    if (playerHasWon() !== false) {
      playerText = `${currentPlayer} has won!`;

      let winning_blocks = playerHasWon();
      winning_blocks.map(
        (box) => (boxes[box].style.backgroundColor = winnerIndicator)
      );
      return;
    }

    // overwrite the current player //
    currentPlayer = currentPlayer == x_TEXT ? o_TEXT : x_TEXT;
  }
}


// winning combinations //
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}

// restart the game //
restartBtn.addEventListener("click", restart);
function restart() {
  spaces.fill(null);


  // loop through all the boxes //
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
  });
  playerText = "tic tac toe";
  // default current player to X //
  currentPlayer = x_TEXT;
}
startGame();
