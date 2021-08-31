const arr1 = ["car", "taco", "banana"]

function recursiveCapitalize(arr) {
    if(arr.length === 0 ) {
        // return arr[0].toUpperCase();
    }
    let res = recursiveCapitalize(arr.slice(0, -1));
    res.push(arr.slice(arr.length -1)[0].toUpperCase());
    return res;
}
console.log(recursiveCapitalize(arr1));