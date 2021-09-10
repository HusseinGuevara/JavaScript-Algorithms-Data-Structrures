const arr1 = [6,7,8,5,4,1,9,2,3]
const arr2 = [22,47,33,14,25,36,57,12,15]
const arr3 = [698,147,362,452,963,144]

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
          //left
        quickSort(arr,left,pivotIndex-1);
          //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
} 
console.log(quickSort(arr1));
console.log(quickSort(arr2));
console.log(quickSort(arr3));