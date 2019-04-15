// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(numArr) {
    var resultArr = [];
    
    numArr.sort((a, b) => a - b);
    
    for(var i = 0; i < numArr.length - 2; i++) {
        if (i > 0 && numArr[i] === numArr[i - 1]) { continue; }
        var left = i + 1;
        var right = numArr.length - 1;

        while(left < right) {
            if(numArr[i] + numArr[left] + numArr[right] == 0) {
                resultArr.push([numArr[i], numArr[left], numArr[right]]);
                left++;
                right--;
                while(left < right && numArr[left] == numArr[left - 1]) {
                    left++;
                }
                while(left < right && numArr[right] == numArr[right + 1]) {
                    right--;
                }
            }
            else if(numArr[i] + numArr[left] + numArr[right] > 0) {
                right--;
            }
            else {
                left++;
            }
        }
    }
    
    return resultArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));