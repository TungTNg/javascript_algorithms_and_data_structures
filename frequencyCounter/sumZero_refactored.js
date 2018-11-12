function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if(arr[left] + arr[right] == 0) {
            return [arr[left], arr[right]];
        } else if (arr[left] + arr[right] > 0) {
            right--;
        } else {
            left++;
        }
    }
}

const arr = [-4, -5, -3, -2, -1, 2, 3];
console.log(sumZero(arr));