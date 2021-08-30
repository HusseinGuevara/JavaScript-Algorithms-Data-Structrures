const arr1 = [1,2,3]
const expected1 = 6;

const arr2 = [1,2,3,10]
const expected2 = 60;

function productArr(arr) {
    // EGDE CASES 
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productArr(arr.slice(1))
}
console.log(productArr(arr1));
console.log(productArr(arr2));