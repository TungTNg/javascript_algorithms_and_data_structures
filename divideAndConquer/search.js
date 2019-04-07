function search(arr, target) {
    var min = 0;
    var max = arr.length - 1;
    
    while(min <= max) {
        var middle = Math.floor((min + max)/2);
        if(arr[middle] < target) {
            min = middle + 1;
        }
        else if(arr[middle] > target) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    
    return -1;
}

console.log(search([-1, 1, 2, 4, 6, 7, 10], 4));