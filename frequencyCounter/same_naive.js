function same(arr1, arr2) {
    if(arr1.length != arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex == -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}

let arr1 = [1, 2, 1];
let arr2 = [1, 4, 1];
console.log(same(arr1, arr2));
