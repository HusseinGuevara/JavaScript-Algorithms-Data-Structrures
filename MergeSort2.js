const arr1 = [1,4,6,8,10];
const arr2 = [7,11,14,20,21];
const arr3 = [5,4,9,12,1,7,6,8] 


function merge(arr01, arr02) {
    var sortedArr = [];
    var firstPointer = 0;
    var secondPointer = 0;

    while(firstPointer < arr01.length && secondPointer < arr02.length) {
        if(arr01[firstPointer] < arr02[secondPointer]) {
            sortedArr.push(arr01[firstPointer]);
            firstPointer++;
        } else {
            sortedArr.push(arr02[secondPointer]);
            secondPointer++;
        }
    }
    while(firstPointer < arr01.length) {
        sortedArr.push(arr01[firstPointer]);
        firstPointer++;
    }
    while(secondPointer < arr02.length) {
        sortedArr.push(arr02[secondPointer]);
        secondPointer++;
    }

    return sortedArr;
}
// console.log(merge(arr1, arr2));

function mergeSort(arr) {
    // BASE Case
    if(arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left,right);

}
console.log(mergeSort(arr3));