// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     const left = [0];
//     let right = 0;
//     let total = 0;
    
//     for(let i = 1; i < height.length; i++) {
//         left.push(Math.max(left[i - 1], height[i - 1]));
//     }
    
//     for(let j = height.length - 2; j >= 0; j--) {
//         right = Math.max(right, height[j + 1]);
//         let sum = Math.min(right, left[j]) - height[j];
//         if(sum > 0) total += sum;
//     }
    
//     return total;
// };

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// https://www.youtube.com/watch?v=zdDeV5v_iUE

var trap = function(height) {
    if(height == null) {
        return 0;
    }
    
    let totalWater = 0;
    let length = height.length;
    let maxLeft = [];
    let maxRight = [];
    
    maxLeft[0] = 0;
    maxRight[length - 1] = 0;
    
    for(let i = 1; i < length; i++) {
        maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1]);
    }
    
    console.log('Max Left Array: ' + maxLeft);
    
    for(let j = length - 2; j >= 0; j--) {
        maxRight[j] = Math.max(height[j + 1], maxRight[j + 1]);
    }
    
    console.log('Max Right Array: ' + maxRight);
    
    for(let i = 0; i < length; i++) {
        let waterAtIndex = Math.min(maxLeft[i], maxRight[i]) - height[i];
        console.log('Water at index ' + i + ' :' + waterAtIndex);
        if(waterAtIndex > 0) {
            totalWater += waterAtIndex;
        }
    }
    
    return totalWater;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// https://www.youtube.com/watch?v=fTD6Se3ZtEo