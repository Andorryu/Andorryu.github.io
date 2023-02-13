
// RANDOM IDEA: What if AI could be used to test the fairness of a competitive game?

class Symbol {
    constructor(player, img) {
        this.img = img
        this.owner = player;
    }
}

let board = [
    [new Symbol("x", "x.png"), new Symbol("x", "x.png"), new Symbol("x", "x.png")],
    [null, null, null],
    [null, null, null]
];

// order of events:
// check for input
// update board
// remove event listener
// check for win or draw
// update UI

function checkWin(board) {

    let goalNum = 3; // this could be larger than 3 for infinite tic-tac-toe

    
    
    return "no winner";
}

function onclick() {
    let svg = document.querySelector("svg")
    this.style.fill = "yellow"; // 'this' refers to the space, since it is called in space's method
    
    this.removeEventListener("click", onclick);

    let pos = [
        this.getAttribute("row"),
        this.getAttribute("col")
    ]; // row, col


    // update board with change
    board[pos[0] - 1][pos[1] - 1] = new Symbol("p1", "x.png");
    // update UI
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] != null) {
                svg.appendChild(board[row][col].img);
            }
        }
    }
    this.removeEventListener("click", onclick);
}



// add event listeners for clicking all spaces
for (space of document.querySelectorAll(".spaces")) {
    space.addEventListener("click", onclick);
}

