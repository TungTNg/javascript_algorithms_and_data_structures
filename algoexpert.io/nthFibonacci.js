// function getNthFib(n) {
//     if(n == 2) return 1
//     else if(n == 1) return 0
//     return getNthFib(n - 1) + getNthFib(n - 2);
// }

function getNthFib(n) {
    var fn      = 1;
    var fn_1    = 0;
    var fibo    = 0;
    
    for(var i = 2; i < n; i++) {
        fibo = fn + fn_1;
        fn_1 = fn;
        fn   = fibo;
    }
    
    return fibo;
}

console.log(getNthFib(6));