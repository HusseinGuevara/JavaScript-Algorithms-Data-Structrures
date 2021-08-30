const str1 = "hussein"
const expected1 = "niessuh"

const str2 = "doobie"
const expected2 = "eibood"

const str3 = "as"

function reverseString(str) {
    // EDGE CASE 
    if(str.length < 2) {
        return str;
    }
    
    // BASE CASE 
    if(str.length === 1) {
        return str[0];
    }
    return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));