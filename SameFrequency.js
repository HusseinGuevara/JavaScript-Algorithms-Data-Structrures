const nums1 = 182;
const nums2 = 281;
const expected1 = true;

const nums3 = 34;
const nums4 = 14;
const expected2 = false;

const nums5 = 3589578;
const nums6 = 5879385;
const expected3 = true;

const nums7 = 22;
const nums8 = 222;
const expected4 = false; 

// Add all digits from each from one num and delete the didgits from the other
// If they have the same numbers. Object should be empty


function sameFrequency(numA, numB) {
    var frequencyTable1 = {};
    var frequencyTable2 = {};
    var numOne = numA.toString();
    var numTwo = numB.toString();

    // EDGE CASE
    if(numOne.length !== numTwo.length) {
        return false;
    }
    
    for(var i = 0; i < numOne.length; i++) {
        frequencyTable1[numOne[i]] = (frequencyTable1[numOne[i]] || 0) + 1;
        // console.log(frequencyTable1);
    }
    
    for(var i = 0; i < numTwo.length; i++) {
        frequencyTable2[numTwo[i]] = (frequencyTable2[numTwo[i]] || 0) + 1;
        // console.log(frequencyTable2);
    }

    for(let key in frequencyTable1) {
        if(frequencyTable1[key] !== frequencyTable2[key]) return false;
    }
    return true


}
console.log(sameFrequency(nums1, nums2));
console.log(sameFrequency(nums3, nums4));
console.log(sameFrequency(nums5, nums6));
console.log(sameFrequency(nums7, nums8));