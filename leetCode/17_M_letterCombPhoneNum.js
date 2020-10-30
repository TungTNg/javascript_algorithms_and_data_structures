// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

/**
 * @param {string} digits
 * @return {string[]}
 */

const letterCombinations = function(digits) {
    var resultArr = [];

    if (digits == null || digits.length == 0) return resultArr;

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    function generateCombinations(digitsIndex, letterStr) {
        
        if (digitsIndex == digits.length) {
            resultArr.push(letterStr);
            return;
        }

        for (var character of map[digits[digitsIndex]]) {
            generateCombinations(digitsIndex + 1, letterStr + character);
        }
    }

    generateCombinations(0, '');
    
    return resultArr;
};

console.log(letterCombinations("23"));