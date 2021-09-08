const arr1 = [1,4,8,9,12]
const arr2 = [2,3,5,6,7,55,69,96,99,100]


function merge(arr, arr0) {
    var sortedArr = [];
    var pointer1 = 0;
    var pointer2 = 0;

    while(pointer1 < arr.length && pointer2 < arr0.length) {
        if(arr0[pointer2] > arr[pointer1]) {
            sortedArr.push(arr[pointer1]);
            pointer1++;
            console.log("Sorted: " + sortedArr)
            console.log("Number: " + arr[pointer1])
        } else {
            
            sortedArr.push(arr0[pointer2]);
            pointer2++;
            console.log("Else Number : " + arr0[pointer2])
        }
    }
    while(pointer1 < arr.length) {
        sortedArr.push(arr[pointer1]);
        pointer1++;
    }
    while(pointer2 < arr0.length) {
        sortedArr.push(arr0[pointer2]);
        pointer2++;
    }
    return sortedArr

}

function mergeSort(arr) {
    // BASE CASE
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
console.log(mergeSort(arr1));
console.log(mergeSort(arr2));