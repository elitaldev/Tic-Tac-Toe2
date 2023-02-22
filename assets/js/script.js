let playerText = document.getElementById("playerText");
let restartBtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

const o_TEXT = "o";
const x_TEXT = "x";
let currentPlayer = x_TEXT;

let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
    const id = e.target.id;

    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        currentPlayer = currentPlayer == x_TEXT ? o_TEXT : x_TEXT;
    }
}
restartBtn.addEventListener("click", restart);
function restart() {
    spaces.fill(null);

    boxes.forEach(box =>
        box.innerText = "");
    currentPlayer = x_TEXT;
}

startGame();
