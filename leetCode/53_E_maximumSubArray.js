// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
 
// O(n^2) 
// var maxSubArray = function(nums) {
//     var maxSum = -Infinity;
    
//     for(var i = 0; i < nums.length; i++) {
//         var windowSum = 0;
        
//         for(var j = i; j < nums.length; j++) {
//             windowSum += nums[j];    
//             maxSum = Math.max(maxSum, windowSum);
//         }
//     }
    
//     return maxSum;
// };

var maxSubArray = function(nums) {
    var maxSubArrayValue = -Infinity;
    var maxAtIndex = 0;
    
    for(var i = 0; i < nums.length; i++) {
        // Do I want to just choose the value at the index itself (to start a new subarray) or do I want to continue with previous subarray added values?
        // => This action of choosing will yield the best value at each index
        maxAtIndex = Math.max(nums[i], maxAtIndex + nums[i]);
        
        // Choose the best index (which performs best) & the sum value it produces 
        maxSubArrayValue = Math.max(maxSubArrayValue, maxAtIndex);
    }
    
    return maxSubArrayValue;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// https://www.youtube.com/watch?v=2MmGzdiKR9Y