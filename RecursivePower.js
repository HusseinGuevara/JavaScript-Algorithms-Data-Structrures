const base1 = 2;
const exp1 = 3;
const expected1 = 8;

const base2 = 2;
const exp2 = 4;
const expected2 = 16;

const base3 = 9;
const exp3 = 2;
const expected3 = 81;

const base4 = 12;
const exp4 = 2;
const expected4 = 144;


function recursivePower(base, exponent) {
    if(exponent === 0) {
        return 1;
    
    }
    return base * recursivePower(base, exponent - 1);

}   
console.log(recursivePower(base1, exp1));
console.log(recursivePower(base2, exp2));
console.log(recursivePower(base3, exp3));
console.log(recursivePower(base4, exp4));