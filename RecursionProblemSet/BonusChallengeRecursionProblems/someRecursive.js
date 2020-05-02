// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it return false

 const isOdd = val => val % 2 !== 0;
 
 // Check ONLY 1 value in the array satisfy callback condition
function someRecursive(arr, callBack) {
    if(arr.length == 0) return false;
    if(callBack(arr[0])) return true;
    return someRecursive(arr.slice(1), callBack); 
}
 
// Check if ALL VALUES in the array satisfy callback condition
// function someRecursive(arr, callBack) {
//     if(arr.length == 0) return true;
//     if(!callBack(arr[0])) return false;
//     return someRecursive(arr.slice(1), callBack); 
// }