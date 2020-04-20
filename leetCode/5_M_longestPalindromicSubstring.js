// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(str) {
    var resultStartIndex;
    var resultStrLength = 0;
    
    if(str == null || str.length < 1) return "";
    
    for(var i = 0; i < str.length; i++) {
        // account for case like "ab0ba"
        expandFromMiddle(i, i);
        // account for case like "abba"
        expandFromMiddle(i, i + 1);
    }
    
    function expandFromMiddle(left, right) {
        while(left >= 0 && right < str.length && str[left] == str[right]) {
            left--;
            right++;
        }
        
        if(right - left - 1 > resultStrLength) {
            resultStrLength = right - left - 1;
            resultStartIndex = left + 1;
        }
    }
    
    return str.substring(resultStartIndex, resultStartIndex + resultStrLength);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));