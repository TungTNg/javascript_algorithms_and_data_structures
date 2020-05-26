// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Follow up: Your solution should run in O(log n) time and O(1) space.

 

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

/**
 * @param {number[]} nums
 * @return {number}
 */
 
// O(n) solution
/*
var singleNonDuplicate = function(nums) {
    for(var i = 0; i < nums.length; i++) {
        if(i % 2 == 0) {
            if(nums[i] !== nums[i + 1]) return nums[i];
        } else if (i % 2 !== 0) {
            if(nums[i] !== nums[i - 1]) return nums[i];
        }
    }
};
*/

// O(logn) solution
var singleNonDuplicate = function(nums) {
    var left = 0;
    var right = nums.length - 1;
    
    while(left <= right) {
        var mid = Math.floor((left + right) / 2);
        
        if(nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
        if(nums[mid] == nums[mid - 1]) {
            if((mid - 2 - 0 + 1) % 2 !== 0) {
                right   = mid - 2;
            } else {
                left    = mid + 1; 
            }
        }
        if(nums[mid] == nums[mid + 1]) {
            if((mid - 1 - 0 + 1) % 2 !== 0) {
                right   = mid - 1;
            } else {
                left    = mid + 2;
            }
        }
    }
    
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));