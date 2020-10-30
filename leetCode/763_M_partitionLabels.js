// A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

// Example 1:

// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 

// Note:

// S will have length in range [1, 500].
// S will consist of lowercase English letters ('a' to 'z') only.

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    var resultArr = [];
    
    if(!S || !S.length) return resultArr;
    
    var indicesMap = {};
    for(var i = 0; i < S.length; i++) {
        indicesMap[S[i]] = i;
    }
    
    var startPartitionIndex = 0,
        endPartitionIndex   = 0;
    for(var i = 0; i < S.length; i++) {
        endPartitionIndex = Math.max(endPartitionIndex, indicesMap[S[i]]);
        
        if(endPartitionIndex == i) {
            resultArr.push(endPartitionIndex - startPartitionIndex + 1);
            startPartitionIndex = i + 1;
        }
    }    
    
    return resultArr;    
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));