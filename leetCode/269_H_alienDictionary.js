// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

// Example 1:

// Input:
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]

// Output: "wertf"
// Example 2:

// Input:
// [
//   "z",
//   "x"
// ]

// Output: "zx"
// Example 3:

// Input:
// [
//   "z",
//   "x",
//   "z"
// ] 

// Output: "" 

// Explanation: The order is invalid, so return "".
// Note:

// You may assume all letters are in lowercase.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    var graph = {};
    
    // Let the current pair of words be word1 and word2.
    // 1. One by one compare characters of both words and find the first mismatching characters.
    // 2. Create an edge in graph from mismatching character of w1 to that of w2.
    for(var i = 0; i < words.length - 1; i++) {
        var word1 = words[i];
        var word2 = words[i + 1];
        
        if(word1.length > word2.length && word1.startsWith(word2)) return "";

        for(var j = 0; j < Math.min(word1.length, word2.length); j++) {
            if(word1[j] !== word2[j]) {
                if(!(word1[j] in graph)) {
                    graph[word1[j]] = [word2[j]];
                } else {
                    graph[word1[j]].push(word2[j]);
                }
                
                break;
            }
        }
    }
    
    var indegrees = {};
    
    // Add all initial 0 in-degree of all letters in each word
    for(var i = 0; i < words.length; i++) {
        for(var j = 0; j < words[i].length; j++) {
            indegrees[words[i][j]] = 0;
        }
    }
    
    // Increment indegree of each vertex if they have any incoming edge
    for(var vertex in graph) {
        for(var neighbor of graph[vertex]) {
            indegrees[neighbor]++;
        }
    }
    
    console.log(graph);
    console.log(indegrees);
    
    const queue = [];
    const ordering = []; // Final result of the topological ordering.
    
    // Select the initial sources
    for(var vertex in indegrees) {
        if(indegrees[vertex] == 0) queue.push(vertex)
    }
    
    while(queue.length > 0) {
        var vertex = queue.shift();
        
        // Decrement the in-degree of all adjacents vertices of v,
        // and add them to the queue if their indegree is 0.
        // Need this check for the last vertex => sink, WILL NOT be in graph (in this case, sink is 'f')
        if(vertex in graph) {
            for(var neighbor of graph[vertex]) {
                indegrees[neighbor]--;
                if(indegrees[neighbor] == 0) queue.push(neighbor);
            }
        }
        
        ordering.push(vertex);
    }
    
    if (ordering.length !== Object.keys(indegrees).length) {
        // Graph contains a cylce, topological sort is not possible.
        return "";
    }
    
    return ordering.join("");
};

console.log(alienOrder([
                          "wrt",
                          "wrf",
                          "er",
                          "ett",
                          "rftt"
                        ]));

// console.log(alienOrder([
//                           "a", "a"
//                         ]));