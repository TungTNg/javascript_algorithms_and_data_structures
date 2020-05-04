// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
    var resultArr = []
    
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            resultArr.concat(flatten(arr[i]));
        } else {
            resultArr.push(arr[i]);
        }
    }
    
    return resultArr;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]