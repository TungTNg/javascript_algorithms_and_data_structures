// Start by picking the second element in the array
// Now compare the second element with the one before it and swap it necessary
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (e.e. the left side) to place the element in the correct place
// Repeat until the array is sorted.

// Time Complexity: O(n^2) worst case
// Best Case (arr is already sorted) -> O(n)
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for(var j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));