function countUniqueValues(arr) {
    let anotherArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(anotherArr.indexOf(arr[i]) == -1) {
            anotherArr.push(arr[i]);
        }
    }
    
    return anotherArr.length;
}

const arr = [-2, -1, -1, 0, 1]; // 4 
console.log(countUniqueValues(arr));