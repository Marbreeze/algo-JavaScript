//Return the longest word of a string that has a longest string inside


function longestWord(str){
    let longest = str.toLowerCase().match(/[0-9a-z]+/g) //remove every symbol besides a-z0-9 globaly,return an arr of substring
    console.log(longest)
    //use sort method
    let sorted = longest.sort(function(a, b){ //a first word b second word
        return b.length - a.length; //sorts
    })
    //console.log(sorted);
const longWord = sorted.filter(function(word){ //returns if there is any more words with the same length as first-one
    return word.length === sorted[0].length;
})
if(longWord.length === 1){  //if there is not any words matching first length
    return longWord[0];  //return the fisr one
}
else{
    return longWord;
}
}
console.log(longestWord("Hello my name is  Marina"))