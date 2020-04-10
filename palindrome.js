   // WRITE A FUNCTION THAT RETURNS A BOOLEAN IF A WORD IS A PROBLEM OR NOT
   
function ispalindrome(str){
    const revStr = str.split('').reverse().join('');
    if(revStr === str){
        return true
    }
    return false
}

const output = ispalindrome("madam");
console.log(output);