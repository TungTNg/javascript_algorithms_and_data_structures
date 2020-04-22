function sameFrequency(num1, num2) {
    const num1Str = num1.toString();
    const num2Str = num2.toString();
    if(num1Str.length != num2Str.length) {
        return false;
    }
    
    let frequencyCounter1 = {};
    for(let val of num1Str) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    let frequencyCounter2 = {};
    for(let val of num2Str) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    
    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2) | frequencyCounter1[key] != frequencyCounter2[key]) {
            return false;
        }
    }
    
    return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 13));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));