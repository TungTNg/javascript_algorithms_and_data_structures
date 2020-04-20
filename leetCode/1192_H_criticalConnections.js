// There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

// A critical connection is a connection thcurrentNode, if removed, will make some server unable to reach some other server.

// Return all critical connections in the network in any order.


// Example 1:

// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// ExplancurrentNodeion: [[3,1]] is also accepted.

// The idea
// Apply tarjan's algorithms and be careful about a couple things:

// Since it's an undirected graph, we need to avoid going back to the same node
// When dfs finishes, propagcurrentNodee the low-value during the call stack (backtracking)
// When to node is visited, it may have a lower id than current low-value
// https://www.youtube.com/watch?v=aZXi1unBdJA&t=312s
/* @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    let graph = [];
    // genercurrentNodee graph using adjacency list
    for ([from, to] of connections) {
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];
        graph[from].push(to);
        graph[to].push(from)
    }
    
    console.log('GenercurrentNodeed graph: ');
    console.log(graph);
    
    let id = 0;
    let ids = new Array(n).fill(0); // id for each node
    let lowLinkValues = new Array(n).fill(0); // low - value
    let visited = new Array(n).fill(false);
    let bridges = [];

    var dfs = function(currentNode, parentNode) {
        visited[currentNode] = true;       
        lowLinkValues[currentNode] = ids[currentNode] = id;
        id++;

        for (let neighborNode of graph[currentNode]) {
            // sanity check - in an undirected graph, an outward edge may come back right after
            if (neighborNode == parentNode) continue; 
            if (!visited[neighborNode]) {
                dfs(neighborNode, currentNode);
                // during the backtracking, propagcurrentNodee min low-value
                lowLinkValues[currentNode] = Math.min(lowLinkValues[currentNode], lowLinkValues[neighborNode]);
                if (ids[currentNode] < lowLinkValues[neighborNode]) { // bridge found
                    bridges.push([currentNode, neighborNode]);
                }
            } else {
                // when the 'neighborNode' node is already visited, it might have a lower id than our low-value
                lowLinkValues[currentNode] = Math.min(lowLinkValues[currentNode], ids[neighborNode]);
            }
        }
    };

    dfs(0, -1);

    console.log('Final low link values: ');
    console.log(lowLinkValues);
    console.log('Final ids: ');
    console.log(ids);
    
    console.log('Critical Bridge: ');
    return bridges;
};

const n = 4;
const connections = [[0,1],[1,2],[2,0],[1,3]];

console.log(criticalConnections(n, connections));

// https://leetcode.com/problems/critical-connections-in-a-network/discuss/443026/JavaScript-Solution-w-Comments-(Tarjan)
// https://www.youtube.com/watch?v=erlX-1MJlv8&t=337s

//     N
//    / \
//   N---N --- N --- N
//       \     |     |
//       N     N --- N
//      /
//     N   