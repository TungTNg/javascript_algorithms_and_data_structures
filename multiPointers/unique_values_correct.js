function countUniqueValues(arr) {
    if (arr.length == 0) {
        return 0;
    } 
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        console.log(arr)
    }
    
    return i + 1;
}

const arr = [-2, -1, -1, 0, 1]; // 4 
console.log(countUniqueValues(arr));