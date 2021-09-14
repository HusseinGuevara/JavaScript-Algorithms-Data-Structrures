const arr1 = [6,5,3,2,1,4]
const arr2 = [11254,51,100,1,888,99999]

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
            arr[j] = currentValue;
        }
        console.log("Inner Loop: " + arr)
    }
    return arr;
}
console.log(insertionSort(arr1));
