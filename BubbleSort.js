
const arr1 = [3,4,9,2,1,5,8,6,100,166,174]
const arr2 = [88,66,47,99,102,4,115,205,304,2,1,3,47,10,100]

function bubbleSort(arr) {
    var noSwaps;
    for(var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i - 1; j++ ) {
            // console.log(arr[j], arr[j +1])
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
            
        }
        // if(noSwaps) break;
        // console.log("One Pass")
    }
    return arr
}
console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));