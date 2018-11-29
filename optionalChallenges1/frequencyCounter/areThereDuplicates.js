function areThereDuplicates() {
    let frequencyCounter = {};
    
    for(let val of arguments) {
        frequencyCounter[val] = (frequencyCounter[val] | 0) + 1;
        if(frequencyCounter[val] > 1) {
            return true;
        }
    }
    
    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));