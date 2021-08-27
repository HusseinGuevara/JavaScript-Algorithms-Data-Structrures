function factorial(num) {
    // BASE CASE 
    if(num === 1) {
        return 1;
    }
    return num * factorial(num -1)
}
console.log(factorial(10));