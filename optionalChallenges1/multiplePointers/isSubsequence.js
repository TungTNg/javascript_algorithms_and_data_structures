// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {

    let str1Index = 0;
    let str2Index = 0;
    
    while(str1Index < str1.length && str2Index < str2.length) {
        if(str1[str1Index] == str2[str2Index]) {
            str1Index++;
        }
        str2Index++;
    }
    
    return str1Index == str1.length;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
