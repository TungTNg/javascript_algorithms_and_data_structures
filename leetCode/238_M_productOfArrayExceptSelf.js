// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var leftProducts = [];
    leftProducts[0] = 1;
    
    for(var i = 1; i < nums.length; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    
    var rightProducts = [];
    rightProducts[nums.length - 1] = 1;
    
    for(var i = nums.length - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }
    
    var output = [];
    for(var i = 0; i < nums.length; i++) {
        output.push(leftProducts[i] * rightProducts[i]);
    }
    
    return output;
};

console.log(productExceptSelf([1,2,3,4]));