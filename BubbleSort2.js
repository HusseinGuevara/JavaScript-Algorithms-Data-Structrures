const arr1 = [5,6,3,7,9]

function bubbleSort(arr) {
    var sorted = false;
    while(!sorted) {
        sorted = true;
        arr.forEach((ele, i) => {
            // console.log(`ele is: ${ele} i is: ${i}`);
            if(arr[i] > arr[i + 1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                sorted = false;
            }
        }) 
    }
    return arr;
}

function bubbleSort(arr) {
    var exchanged = false;
    for(var i = arr.length; i > 0; i--) {

        for(var j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                exchanged = true;
            }
        }
        if(!exchanged) break;
    }
    return arr;
}    
console.log(bubbleSort(arr1));