/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue = rooms[0];
    const visited = { '0': true };
    
    while(queue.length) {
        const node = queue.shift();
        if(!visited[node]) {
            visited[node] = true;
            queue = queue.concat(rooms[node]);
        }
    }
    
    if(Object.keys(visited).length === rooms.length) {
        return true;
    } else {
        return false;        
    }
};
