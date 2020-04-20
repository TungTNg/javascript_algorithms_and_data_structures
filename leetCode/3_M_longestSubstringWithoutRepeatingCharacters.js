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
 

// This is NOT  a good solution since Object.keys(charRecordObj).length is O(n) => Result is O(n^2) 

// var lengthOfLongestSubstring = function(s) {
//     let charRecordObj = {};
//     let maxSubStrLength = 0;
    
//     let pointer1 = 0;
//     let pointer2 = 0;
//     while(pointer2 < s.length) {
//         let charAtPointer2 = s[pointer2];
//         let charAtPointer1 = s[pointer1];
        
//         if(!(charAtPointer2 in charRecordObj)) {
//             charRecordObj[charAtPointer2] = true;
//             maxSubStrLength = Math.max(maxSubStrLength, Object.keys(charRecordObj).length);
//             pointer2++;
//         } else {
//             delete charRecordObj[charAtPointer1];
//             pointer1++;
//         }
//     }
    
//     return maxSubStrLength;
// };

// console.log(lengthOfLongestSubstring("pwwkew"));

var lengthOfLongestSubstring = function(s) {
    let charRecordObj = {};
    let maxSubStrLength = 0;
    
    let pointer1 = 0;
    let pointer2 = 0;
    while(pointer2 < s.length) {
        let charAtPointer2 = s[pointer2];
        let charAtPointer1 = s[pointer1];
        
        if(!(charAtPointer2 in charRecordObj)) {
            charRecordObj[charAtPointer2] = true;
            maxSubStrLength = Math.max(maxSubStrLength, pointer2 - pointer1 + 1);
            pointer2++;
        } else {
            delete charRecordObj[charAtPointer1];
            pointer1++;
        }
    }
    
    return maxSubStrLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));