// Write a function called averagePair. Given a sorted array of intergers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There maybe more than one pair that matches the average target.

function averagePair(arr, avgNum){

    let i = 0;
    let j = arr.length - 1;
    
    while(i < j) {
        if((arr[i] + arr[j]) / 2 == avgNum) {
            return true;
        } else if((arr[i] + arr[j]) / 2 > avgNum) {
            j--;
        } else {
            i++;
        }
    }
    
    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));