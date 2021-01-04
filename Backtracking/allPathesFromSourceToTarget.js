/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {

    const result = [];
    const path = [];
    const n = graph.length - 1;

    dfs(0);

    return result;

    function dfs(position) {
        // do
        path.push(position);

        if (position === n) {
            result.push([...path]);
        }

        //recurse 

        const nextPositions = graph[position];
        for (let i = 0; i < nextPositions.length; i++) {
            dfs(nextPositions[i]);
        }

        // undo
        path.pop();
    }

};