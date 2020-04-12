//write a program that prints all numbers from 1- 100
//for multimple of 3 - fizz,5 - buzz 3 & 5 fizzbuzz

//stept to fallow
//a loop, if else statement, use modulus to see if multiple

function fizzbuzz(){
    for(let i = 1; i <= 100; i++){
        if( i % 15 === 0){
            console.log(i,"fizzbuzz");
        }
        else if(i % 3 == 0){
            console.log(i,"Fizz")
        }
        else if(i % 5 === 0){
            console.log(i,"Buzz")
        }
        else
            console.log(i);
    }
}

console.log(fizzbuzz());
