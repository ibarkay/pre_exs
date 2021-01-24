//makes10 by ibarkay.
const input = require('readline-sync'); //import readliine
let numOne = parseInt(input.question("Please Enter a number : ")); //parseInt == init()
let numTwo = parseInt(input.question("Please Enter a seconde number : "));

function isTen(x,y){
    if (x + y === 10){
        console.log('makes 10')
    }else console.log('Nope')
}

isTen(numOne,numTwo);