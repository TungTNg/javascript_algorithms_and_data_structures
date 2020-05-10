// This function accepts a sorted array and a value
// Create a left pointer at the start of the array, and a right pointer at the end of the array
// While the left pointer comes before the right pointer:
    // Create a pointer in the middle
    // If you find the value you want, return the index
    // If the value is too small, move the left pointer up
    // If the value is too large, move the right pointer down
// If you never find the value, return -1

function binarySearch(sortedArr, val) {
    var left = 0;
    var right = sortedArr.length - 1;
    while(left <= right) {
        var mid = Math.floor((left + right)/2);
        if(sortedArr[mid] == val) {
            return mid;
        } else if(sortedArr[mid] < val) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}