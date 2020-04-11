//WRITE A FUNCTION A RETURNS A INT IN REVERSE ORDER

//transform into str
//use array split
//use reverse the arr
//transform into int again
//and check for neg nun


function reverseInt(int){
const revStr = int.toString().split('').reverse().join('');
 return (parseInt(revStr) * Math.sign(int));
}

const output = reverseInt(-546789);
console.log(output);