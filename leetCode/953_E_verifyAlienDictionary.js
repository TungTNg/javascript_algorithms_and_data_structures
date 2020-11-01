// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    var orderMap = {};
    for(var i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }
    
    for(var i = 0; i < words.length - 1; i++) {
        var word1 = words[i],
            word2 = words[i + 1];
            
        if(word1.length > word2.length && word1.startsWith(word2)) return false;
        
        for(var j = 0; j < Math.min(word1.length, word2.length); j++) {
            if(word1[j] != word2[j]) {
                if(orderMap[word1[j]] > orderMap[word2[j]]) return false;
                
                break;
            }
        }
    }
    
    return true;
};

console.log(isAlienSorted(["world","world","row"], "worldabcefghijkmnpqstuvxyz"));