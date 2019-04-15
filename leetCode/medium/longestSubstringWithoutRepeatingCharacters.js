// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    var map = {};
    var max = 0;
    var i = 0;
    var j = 0;
    
    while(j < str.length) {
        if(!(str[j] in map)) {
            map[str[j]] = true;
            max = Math.max(max, j - i + 1);
            j++;
        } else {
            delete map[str[i]];
            i++;
        }
        
        // console.log(map);
    }
    
    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));