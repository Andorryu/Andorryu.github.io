
// RANDOM IDEA: What if AI could be used to test the fairness of a competitive game?

class Symbol {
    constructor(/*imgSrc,*/ player) {
        //this.img = document.createElement("img").setAttribute("src", imgSrc);
        this.owner = player
    }
}

let board = [
    [new Symbol("x"), new Symbol("x"), new Symbol("x")],
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
    this.style.fill = "yellow"; // 'this' refers to the space, since it is called in space's method
    console.log("click!")
    this.removeEventListener("click", onclick);

    let pos = [
        space.getAttribute("row"),
        space.getAttribute("col")
    ]; // row, col

    // update board with change
    board[pos[0]][pos[1]] = new Symbol("p1");
    space.removeEventListener("click", onclick)
    // update UI
    for (row of board) {
        for (space of row) {
            
        }
    }
}



// add event listeners for clicking all spaces
for (space of document.querySelectorAll(".spaces")) {
    space.addEventListener("click", onclick);
}
