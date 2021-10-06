const arr1 = [5,6,3,7,9]


function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        for(var j = i - 1; j >= 0; j--) {
            if(arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}
console.log(insertionSort(arr1));