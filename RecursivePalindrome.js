const str1 = "racecar"
const expected1 = true;

const str2 = "hussein"

function recursivePalindrome(str) {
    var newString = "";
    
    // EDGE CASE 
    if(str.length === 1 ) {
    return true
    }
    if(str.length === 2) {
        return str[0] === str[1]
    }

    if(str[0] === str.slice(-1)) return recursivePalindrome( str.slice(1, -1))
    return false;
}
console.log(recursivePalindrome(str1));
console.log(recursivePalindrome(str2));
