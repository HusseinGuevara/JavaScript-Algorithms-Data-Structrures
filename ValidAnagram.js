// Given two strings, write a function to determine if the second string is an anagram of the
// of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
// formed from iceman.

const str1 = "aaz";
const str2 = "zza";
const expected1 = false;

const str3 = "slow";
const str4 = "wsl"
const expected2 = false;

const str5 = "mississippi"
const str6 = "ssissimippi"
const expected3 = true;


function validAnagram(strOne, strTwo){
    var charObj1 = {};
    var charObj2 = {};

    if(strOne.length !== strTwo.length) {
        return false
    }
    
    for(var letter of strOne) {
        charObj1[letter] = (charObj1[letter] || 0) + 1;
    }
    for(var letter of strTwo) {
        charObj2[letter] = (charObj2[letter] || 0) +1;
    }
    for(var key in charObj1) {
        if(!(key in charObj2)) {
            return false;
        } 
        if(charObj2[key] !== charObj1[key]) {
            return false;
        }
    }
    return true
}
console.log(validAnagram(str1, str2));
console.log(validAnagram(str3, str4));
console.log(validAnagram(str5, str6));