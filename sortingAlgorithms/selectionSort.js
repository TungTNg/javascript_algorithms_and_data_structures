// Store the first element as the smallest value you've seen so far
// Compare this item to the next item in the array until you find a smaller number
// If the smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began with, swap the two values.
// Repeat this with the next element until the array is sorted.

// Time Complexity: O(n^2) worst
// O(n^2) best

function selectionSort(arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        var lowest = i;
        for(var j = i + 1; j  < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    
    return arr;
}

console.log(selectionSort([34, 22, 10, 5, 0, 19, 17]));