// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

// Example 1:

// Input: 123
// Output: "One Hundred Twenty Three"
// Example 2:

// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:

// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:

// Input: 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    var belowTen        = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var belowTwenty     = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var belowHundred    = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    
    if(num == 0) return "Zero";
    return helper(num);
    
    function helper(num) {
        var result = "";
        
        if(num < 10) result = belowTen[num];
        else if(num < 20) result = belowTwenty[num-10];
        else if(num < 100) result = belowHundred[Math.floor(num/10)] + " " + helper(num%10);
        else if(num < 1000) result = belowTen[Math.floor(num/100)] + " Hundred " + helper(num%100);
        else if(num < 10000) result = belowTen[Math.floor(num/1000)] + " Thousand " + helper(num%1000);
        else if(num < 1000000) result = helper(Math.floor(num/1000)) + " Thousand " + helper(num%1000);
        else if(num < 1000000000) result = helper(Math.floor(num/1000000)) + " Million " + helper(num%1000000);
        else if(num < 1000000000000) result = helper(Math.floor(num/1000000000)) + " Billion " + helper(num%1000000000);
        
        return result.trim();
    }
};

console.log(numberToWords(1234567));