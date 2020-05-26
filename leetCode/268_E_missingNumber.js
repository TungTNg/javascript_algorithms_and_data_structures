// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

/**
 * @param {number[]} nums
 * @return {number}
 */
 
// O(n) time, O(1) space
// Gauss formular for sum from 0 to n: totalSum = (n * (n + 1))/2
var missingNumber = function(nums) {
    var expectedSum = (nums.length * (nums.length + 1)) / 2;
    var actualSum = 0;
    var missingInt;
    
    for(var val of nums) {
        actualSum += val;
    }
    
    missingInt = expectedSum - actualSum;
    
    return missingInt;
};