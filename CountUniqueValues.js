
const arr1 = [1,1,1,1,1,2]
const expected1 = 2

const arr2 = [1,2,3,4,4,4,7,7,12,12,13]
const expected2 = 7

const arr3 = [];
const expected3 = 0;

const arr4 = [4];
const expected4 = 1;

// Create to pointers compare values
// Iterate thru array
// Swap values if the become unique, all unique values are going to be at begining of array

function countUniqueValues(arr){
    var firstPointer = 0;

    // BASE CASE 
    if(arr.length < 1 ) {
        return 0; 
    }
    if(arr.length == 1 ) {
        return 1;
    }

    for(var j = 1; j < arr.length; j++) {
        if(arr[j] !== arr[firstPointer]) {
            firstPointer++;
            arr[firstPointer] = arr[j];
            
        }
        
    }   
    return firstPointer + 1;

    
}    
console.log(countUniqueValues(arr1));
console.log(countUniqueValues(arr2));
console.log(countUniqueValues(arr3));
console.log(countUniqueValues(arr));


