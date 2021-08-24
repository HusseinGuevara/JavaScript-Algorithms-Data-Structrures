
function areThereDuplicates(...params) {
    var frequencyTable = {};

    for(var arg in params) {
        frequencyTable[arg] = (frequencyTable[arg] || 0);
        console.log(frequencyTable);
    }
    for(var key in frequencyTable) {
        if(frequencyTable[key] > 1) {
            return true;
        }
    }
    return false;
}
console.log(areThereDuplicates(1,2,3));
// console.log(areThereDuplicates(1,2,2,3));