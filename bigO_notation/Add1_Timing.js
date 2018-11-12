var start = new Date();
var hrstart = process.hrtime();
var simulateTime = 0;

setTimeout(function(argument) {
  // execution time simulated with setTimeout function
  var end = new Date() - start,
    hrend = process.hrtime(hrstart);

  console.info('Execution time (ms): %dms', end);
  console.info('Execution time (s): %ds %dms', hrend[0], hrend[1] / 1000000);
}, simulateTime);

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

addUpTo(1000000000);
