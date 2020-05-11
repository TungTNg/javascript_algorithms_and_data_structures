// Start looping with a variable called i at the end of the arrays towards the beginning
// Start an inner loop with a variable called j from the beginning until i-1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

// Time Complexity:
// Worst Case -> O(n^2)
// Best Case (arr is already sorted) -> O(n)
function bubbleSort(arr) {
    var noSwap;
    for(var i = arr.length; i > 0; i--) {
        noSwap = true;
        for(var j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        
        if(noSwap) break;
    }
    
    return arr;
}

console.log(bubbleSort([53, 1, 23, 4, 5, 9, 0]))