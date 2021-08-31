const num1 = 4;
const expected1 = 3;

const num2 = 10;
const expected2 = 55;

function fibonacci(num) {   /// 1 1 2 3 5 8 13 21
    //EDGE CASE
    if(num <= 2) {
        return 1;
    }
    // BASE CASE
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(num1));
console.log(fibonacci(num2));