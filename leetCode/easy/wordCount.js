// Write a function to count how many words (between delimiters & anti-delimiters) inside a string

// If there is anti delimeter(s) before/after/or between delimiter(s), negate ALL delimeters

function wordCount(str, delimiter, antiDelimiter) {
    var resultStrArr = [];
    var delimeterIndex = 0;
    var hasDelimiter = false;
    var hasAntiDelimiter = false;
    
    for(var i = 0; i < str.length; i++) {
        if(str[i] == delimiter) {
            hasDelimiter = true;
            
            if(str[i + 1] == antiDelimiter) {
                hasAntiDelimiter = true;
            }
            
            if(str[i - 1] == antiDelimiter) {
                hasAntiDelimiter = true;
            }
        }
        
        if(str[i] == delimiter || i == str.length - 1) {
            if(str.slice(delimeterIndex, i) != delimiter) {
                if(hasAntiDelimiter && hasDelimiter) { 
                    hasAntiDelimiter = false;    
                } else {
                    resultStrArr.push(str.slice(delimeterIndex, i + 1));
                    hasDelimiter = false;
                }
            }
            
            delimeterIndex = i;
        }
        
    }
    
    return resultStrArr.length;
}

// Sample output logics
// "---     " => counts as 1 word
// "- -" => counts as 1 word
// "- - - - " => counts as 1 word
// "   --" => counts as 1 word
// " - " => counts as 1 word

console.log(wordCount("-Hello -World-Iam-Tung", " ", "-")); // --> 1 word
console.log(wordCount("Hello--     -World Iam-Tung-----", " ", "-")); // --> 2 words
console.log(wordCount("Hello-World Iam-Tung", " ", "-")); // --> 2 words
console.log(wordCount("Hello", " ", "-")); // --> 1 word
console.log(wordCount("Hello- - - - World", " ", "-"));// --> 1 word
console.log(wordCount("Hello- -haha- - World", " ", "-"));// --> 1 word
console.log(wordCount("Hello- -haha World", " ", "-"));// --> 2 words
console.log(wordCount("-haha world", " ", "-"));// --> 2 words
console.log(wordCount("haha - world", " ", "-"));// --> 1 word