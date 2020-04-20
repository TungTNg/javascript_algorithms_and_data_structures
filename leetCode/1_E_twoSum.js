// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Approach 1:
// var twoSum = function(nums, target) {
//     let returnArray = [];
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < nums.length; j++) {
//             if(i !== j) {
//                 if(nums[i] + nums[j] == target) {
//                     returnArray.push(i);
//                     returnArray.push(j);
//                     return returnArray;
//                 }
//             }
//         }
//     }
// }; 


// let testArray = [3,2,4];
// console.log(twoSum(testArray, 6));

// Approach 2:
// function twoSum(arr, target) {
//     let lookupObj = {};
//     for(let i = 0; i < arr.length; i++) {
//         if(lookupObj[target - arr[i]]) return [parseInt(lookupObj[target - arr[i]]), parseInt(i)];
//         lookupObj[arr[i]] = i.toString();
//         // console.log(lookupObj);
//     }
// }

// let testArray = [3,2,4];
// console.log(twoSum(testArray, 6));

// let testArray = [2,7,11,15];
// console.log(twoSum(testArray, 9));

const twoSum = (nums, target) => {
  const numRecordObj = {};

  for (let i = 0; i < nums.length; i++) {
    const goalNumber = target - nums[i];

    if (goalNumber in numRecordObj) {
      return [numRecordObj[goalNumber], i];
    }

    numRecordObj[nums[i]] = i;
    console.log(numRecordObj);
  }

  return null;
};

let testArray = [2,7,11,15];
console.log(twoSum(testArray, 9));
