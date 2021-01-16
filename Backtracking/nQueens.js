/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

    let result = [];
    const queens = Array(n).fill(-1);

    function makeBoard() {
        const board = [];
        for (let r = 0; r< n; ++r) {
            let row = "";
            for (let c = 0; c< n; ++c) {
                if(queens[r] === c) {
                    // q
                    row = row + 'Q';
                } else {
                    // .
                    row = row + '.';
                }
            }
            board.push(row);
        }
        return board;
    }

    function isValid(row, col) {
        for(let i = 0;  i< row; ++i) {
            if(queens[i] == col || Math.abs(i - row) == Math.abs(queens[i]- col))
                return false;
        }
        return true;
    }

    function solve(row) {
        if(row === n) {
            const board = makeBoard();
            result.push(board);
        }

        for(let col = 0; col < n ; ++col) {
             if(!isValid(row, col)) {
                 continue;
             }

             queens[row] = col;

             solve(row + 1);

             queens[row] = -1;
        }
    }

    solve(0);

    return result;
};
