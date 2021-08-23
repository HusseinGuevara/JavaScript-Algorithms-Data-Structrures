
const arr1 = [1,2,3,4,5,6];
const num1 = 3;
const expected1 = 15;

const arr2 = [5,6,7,8,9,9]
const num2 =  2;
const expected2 = 18;

const arr3 = [5,4,8,3,4,1,7,9,8,9,9,10,3,7]
const num3 = 2;
const expected3 = 26;

function maxSum(arr, num) {
    var maxSum = 0;
    var tempSum = 0;
    
    // BASE CASE 
    if(arr.length < num) {
        return null
    }
    // Get first initial maxSum
    for(var i = 0; i < num; i ++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(var i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
    
    


}
console.log(maxSum(arr1, num1));
console.log(maxSum(arr2, num2));
console.log(maxSum(arr3, num3));