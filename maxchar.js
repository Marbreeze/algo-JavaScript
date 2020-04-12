//Steps to take:
//make it an arr with split
//store everything in a map obj
//have a var that saves the key in a map
//check if the key value is repeatig more then once seting a flag
//loop in, and check the bigger flag --key in a map and return proper latter



//due to map{} object this solution faster

function maxCharstr(str){
    const myMap = {}; //obj stores the {key : value }
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char){            // create an arr, take an index in map
        if(myMap[char]){                             //if the letter is in map increment its key
             myMap[char]++;
         }
        else{
            myMap[char] = 1;                         //if not remain 1
        }
    })

    for(let char in myMap){                         
         if(myMap[char] > maxNum){                       //if the letter apeared multiple times
            maxNum = myMap[char];                        //retrieve the key(index)
             maxChar = char;                              //retrieve the value
        }
    }
    return maxChar;
}


//using a string

 function maxCharstr(str){
    str = str.toLowerCase();
    for(let i = 0; i< str.length - 1; i++){
         if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){             //indexOf shows the index where the first time char ocured
                    return str[i];                                        //lastIndexOf shows  the index where the last time char ocured 
                                                                         //if not equal its clear that char is repeated
        }
    }return false
}



//using an array

function maxChar(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length - 1; i++){ 
        for(let j = i + 1;j < str.length- 1; j++){ //when i increses j loops thru the whole str again until the same letter is repeated
            if(str[j] == str[i]){
                return str[i];
            }
        }
    }
    return false
}

const output = maxChar('jAva ss');
console.log(output);