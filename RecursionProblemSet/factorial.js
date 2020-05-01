// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an interger and all the intergers below it; e.g., factorial (4!) is equa to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is alwaus 1.

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
   if(num === 0 || num === 1) return 1;
   return num * factorial(num - 1);
}
