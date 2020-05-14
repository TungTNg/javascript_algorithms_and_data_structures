// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

// BFS Solution
// var cloneGraph = function(node) {
//     if(node == null) return null;
    
//     var map = {};
//     var queue = [];
//     queue.push(node);

//     while(queue.length > 0) {
//         var newQueue = [];
//         while(queue.length > 0) {
//             var currentNode = queue.pop();
//             if(!map[currentNode.val]) {
//                 map[currentNode.val] = new Node(currentNode.val, []);
//             }
//             for(var neighbor of currentNode.neighbors) {
//                 if(!map[neighbor.val]) {
//                     map[neighbor.val] = new Node(neighbor.val, []);
//                     newQueue.push(neighbor);
//                 }
//                 map[currentNode.val].neighbors.push(map[neighbor.val]);
//             }
//         }
        
//         queue = newQueue;
//     }
    
//     return map[node.val];
// };

// DFS Solution
var cloneGraph = function(node) {
    if(node == null) return null;
    
    var map = {};
    
    function cloneNode(currentNode) {
        if(!map[currentNode.val]) {
            map[currentNode.val] = new Node(currentNode.val, []);
            for(var neighbor of currentNode.neighbors) {
                map[currentNode.val].neighbors.push(cloneNode(neighbor));
            }
        }
        return map[currentNode.val];
    }
    
    return cloneNode(node);
};

function test(){
    var node1 = new Node(1);
    var node2 = new Node(2);
    var node3 = new Node(3);
    var node4 = new Node(4);
    
    node1.neighbors.push(node2);
    node1.neighbors.push(node4);
    
    node2.neighbors.push(node1);
    node2.neighbors.push(node3);
    
    node3.neighbors.push(node2);
    node3.neighbors.push(node4);
    
    node4.neighbors.push(node1);
    node4.neighbors.push(node3);
    
    var clone = cloneGraph(node1);
    for(var neighbor of clone.neighbors) {
        console.log("NEIGHBOR:");
        console.log(neighbor);
    }
}

test()