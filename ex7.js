// Factorial Challenge by ibarkay.
'use-strict';
const input = require('readline-sync');
let numy = parseInt(input.question("Please  enter a positive number : "));
let sumy = 1;

function Factorial(numy){
    for (let i=0;i < numy; i++){
        sumy *= (i+1);
        //console.log(i,sumy);
    }
}
Factorial(numy);
console.log(sumy);