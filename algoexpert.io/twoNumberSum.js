function twoNumberSum(array, targetSum) {
    var storeArrObj = {};
    
    for(var i = 0; i < array.length; i++) {
        var targetNum = targetSum - array[i];
        if(targetNum in storeArrObj) {
            return [Math.min(targetNum, array[i]), Math.max(targetNum, array[i])];
        }
        storeArrObj[array[i]] = true;
    }
    
    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, 6, -1], 10));