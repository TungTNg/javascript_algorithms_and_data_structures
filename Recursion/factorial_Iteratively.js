function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

// function factorial(num) {
//     let total = 1;
//     for(let i = 2; i <= num; i++) {
//         total = total * i;
//     }
//     return total;
// }

console.log(factorial(5));