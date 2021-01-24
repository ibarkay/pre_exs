//Prime numbers by ibarkay.
'use-strict'
const input = require('readline-sync');

let limit = parseInt(input.question("Please write a limit number to find primes until : "))

for (let counter = 1; counter <= limit; counter++){ 
    let notPrime = false;
    for (let i = 2; i <= counter; i++){
        if (counter % i === 0 && i != counter){ //if its divide by a number (not it self) , its a prime.
            notPrime = true;
        }
    }
    if (notPrime === false){
        console.log(counter);
    }
}