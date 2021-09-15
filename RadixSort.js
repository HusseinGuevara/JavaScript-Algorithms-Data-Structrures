
const nums1 = [15,13,1,8,9,100,300,4000]

// Fucntion to get specific digit
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// Function to get numbers of digits in integer
function digitCount(num) {
    if( num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to see what integer in an array has the most digits
function mostDigits(nums) {
    var maxDigits = 0;
    for(var i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    // Get the max digit count
    var maxDigits = mostDigits(nums)
    for(k = 0; k < maxDigits; k++) {
        var digitBuckets = Array.from({length: 10}, () => []);
        for(var i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums
}    
console.log(radixSort(nums1));
