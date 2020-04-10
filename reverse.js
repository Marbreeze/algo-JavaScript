MULTIPLE SOTUTIONS FOR STRING-REVERSE PROBLEM
write a function that takes a string and returns it in reverse order

function strReverse(str){
    let strRev = '';
    for(var i = 0; i<= str.length - 1;i++){
        strRev = str[i] + strRev;
    }
    return strRev;
}




function strReverse(str){
    return str.split('').reverse().join('')
}

function strReverse(str){
    let revStr = '';
    for(let element of str){  //my favorite and the fastest one
        revStr = element + revStr;
    }
    return revStr;
}

function strReverse(str){
    let result = '';
    str.split('').map(ell => result =  result + ell)
    return result;
}

let output = strReverse('Hello');
console.log(output);