//LogNumber by ibarkay.
const input = require('readline-sync');

let numOne = parseInt(input.question("Please Enter a number 0-9 : "));
var dicy = {0:"zero",1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine"};

function translate(x){
    console.log(dicy[x]) ;
}

translate(numOne);