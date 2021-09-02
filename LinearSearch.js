const arr1 = [1,2,3,4,5,6] 
const val1 = 4;

const arr2 = [ 45,87,96,1,2,3,4,78,9,5,4,3]
const val2 = 78;

// function linearSearch(arr, val) {
//     return arr.indexOf(val);
// }
// console.log(linearSearch(arr1, val1));
// console.log(linearSearch(arr2, val2));

function linearSearch(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i
        } 
    }
    return -1
}
console.log(linearSearch(arr1,val1))
console.log(linearSearch(arr2,val2))