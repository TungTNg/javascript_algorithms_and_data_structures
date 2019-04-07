// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

var isValid = function(str) {
    let compareObj = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    
    var arr = [];
    for(var i = 0; i < str.length; i++) {
        if(str[i] == "(" || str[i] == "[" || str[i] == "{") {
            arr.push(str[i]);
        } else {
            if(compareObj[arr[arr.length - 1]] == str[i]) {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    
    return arr.length === 0 ? true : false;
};

console.log(isValid("()"));
console.log(isValid("(){}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("]]"));
