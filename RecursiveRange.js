const num1 = 6;
const expected1 = 21;

const num2 = 5;
const expected2 = 15;


function recursiveRange(num) {
    // BASE CASE 
    if(num === 0) {
        return 0
    }
    return num + recursiveRange(num - 1)

}
console.log(recursiveRange(num1));
console.log(recursiveRange(num2));