const arr1 = [9,7,8,4,3,6,2,1]
const arr2 = [18,3,6,4,21,33,64,2,500,1]

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        }
        
        for(var i = 0; i < arr.length; i++) {
            let min = i;
            for(var j = i + 1; j < arr.length; j++ ) {
                if(arr[j] < arr[min]) {
                    min = j;
                }
            }
            if(i !== min) swap(arr, i, min);
        }
        return arr;
    
}

console.log(selectionSort(arr1));
console.log(selectionSort(arr2));

