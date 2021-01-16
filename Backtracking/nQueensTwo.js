/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {

    let result = 0;
    const queens = Array(n).fill(-1);

    function isValid(row, col) {
        for(let i = 0;  i< row; ++i) {
            if(queens[i] == col || Math.abs(i - row) == Math.abs(queens[i]- col))
                return false;
        }
        return true;
    }

    function solve(row) {
        if(row === n) {
            result++;
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