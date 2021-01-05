/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let letterHash = {};
    for(let letter of tiles) {
        letterHash[letter] ? letterHash[letter]++ : letterHash[letter] = 1;
    }

    return dfs(letterHash);
};

const dfs = (hash) => {
      let sum = 0;
      for(let letter in hash) {
          if(hash[letter] === 0) continue;
          sum++;

          hash[letter]--;
          sum += dfs(hash);
          hash[letter]++;
      }
      return sum;
};