class Symbol {
    constructor(/*imgSrc,*/ player) {
        //this.img = document.createElement("img").setAttribute("src", imgSrc);
        this.owner = player
    }
}


let board = [
    [new Symbol("x"), new Symbol("x"), null],
    [null, null, null],
    [null, null, null]
];

// RANDOM IDEA: What if AI could be used to test the fairness of a competitive game?

function checkWin(board) {

    let goalNum = 3; // this could be larger than 3 for infinite tic-tac-toe

    // check rows
    for (let rowi = 0; rowi < board.length; rowi++) { // for every row
        for (let coli = 0; coli < board.length; coli++) { // for every space in current row

            if (board[rowi][coli] == null) break; // skip iteration if there is no symbol there

            win = true; // assume someone won and prove it wrong
            if (coli + goalNum >= board[rowi].length) { // if the tile range reaches goalNum tiles away from coli, there cant be a win
                win = false;
                break;
            }
            testOwner = board[rowi][coli].owner; // owner of first tile of each three in a row
            for (let i = 0; i < goalNum; i++) { // for the next goalNum tiles
                if (board[rowi][coli + i].owner != testOwner) { // test the owner against the testOwner
                    win = false;
                    break;
                }
            }
            if (win) return testOwner;
        }
    }
    return "no winner"
}

document.addEventListener("click", () => {
    document.querySelector("#debug").innerHTML = checkWin(board);
    console.log("click!")
});


