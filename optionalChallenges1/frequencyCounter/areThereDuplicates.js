// Frequency Counter Solution

function areThereDuplicates() {
    let frequencyCounter = {};
    
    for(let val of arguments) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
        if(frequencyCounter[val] > 1) {
            return true;
        }
    }
    
    return false;
}

// // Multiple Pointers Solution
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// // One Liner Solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));