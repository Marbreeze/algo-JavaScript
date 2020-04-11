    //WRITE A PROGRAM THAT CAPITALIZE THE FIRST LETTER OF EACH WORD.

    //first make sure that everything is in lower case
    //transform str  into an arr with split
    //iterate thru arr and find first letter and make it toupper using map
    //make it into the str again

function strCapitalizer(str){
  return str
  .toLowerCase()
  .split(' ') //spliting in substrings in arr when space ocurs
  .map(ell =>{
      return (ell[0].toUpperCase() + ell.slice(1))}
      )
    .join(' '); //join substrings devided by an space an make a bi
}

const output = strCapitalizer("java script methods")
console.log(output);