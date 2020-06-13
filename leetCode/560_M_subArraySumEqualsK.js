// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2
 

// Constraints:

// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var map = {};
    
    var sum = 0;
    map[0] = 1;
    
    var count = 0;
    
    for(var i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        var targetSum = sum - k;
        
        if(targetSum in map) {
            count += map[targetSum];
        } 
        
        map[sum] = (map[sum] || 0) + 1;
    }
    
    return count;
};

console.log(subarraySum([1, 2, 3], 3));