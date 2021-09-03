const str1 = "Hello from Hawaii Hawaii Hawaii.";
const word1 = "Hawaii";

function stringSearch(str, word) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < word.length; j++) {
            if(word[j] !== str[i + j]) break;
            if( j === word.length - 1) count++;
        }
    }
    return count;
}
console.log(stringSearch(str1, word1));