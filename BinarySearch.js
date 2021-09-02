const arr1 = [4,5,6,7,8,9]
const val1 = 6;

const arr2 = [4, 5, 6, 8, 12];
const val2 = 5;

const arr3 = [1, 3, 5, 6];
const val3 = 4;


function binarySearch(arr, val) {
    var sortedArr = arr.sort();
    var found = false;
    var idx = Math.floor(sortedArr.length/2);

    while(!found) {
        //EDGE CASE 
        if( sortedArr[idx] === val) {
            return true;
        }

        // BASE CASE 
        if(sortedArr.length < 2) break;

        if(val < sortedArr[idx]) {
            sortedArr = sortedArr.slice(0, idx);
            idx = Math.floor(sortedArr.length/2);
        }
        if(val > sortedArr[idx]) {
            sortedArr = sortedArr.slice(idx + 1, sortedArr.length)
            idx = Math.floor(sortedArr.length/2);
        }
    }
    return found;

    
}
console.log(binarySearch(arr1, val1));
console.log(binarySearch(arr2, val2));
console.log(binarySearch(arr3, val3));