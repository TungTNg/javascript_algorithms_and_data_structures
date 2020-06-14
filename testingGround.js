var map = {
    "apple"     : 5,
    "orange"    : 2,
    "banana"    : 3
};

var arr = Object.entries(map);

console.log(arr.sort((a, b) => { return a[1] - b[1] }));