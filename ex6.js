'use-strict'
const input = require('readline-sync');
//while-loop
let choseNum = 0
choseNum = parseInt(input.question("please choose a number larger than 10 : "));
while (choseNum < 10){
    choseNum = parseInt(input.question("please choose a number LARGER than 10 : "));
}
console.log("Thank you.")
