// Capitalize Vowels by ibarkay.
//Example: “Hello dear Bootcamper” will print “HEllO dEAr BOOtcAmpEr”

'use-strict';
let input = require('readline-sync');

let stringy = input.question("Please enter a string : ");
let Vowels = "aeiouy"
let result = "";

for (var i = 0 ; i < stringy.length; i++){
    if (Vowels.includes(stringy[i])){
        result += stringy[i].toUpperCase();
    }else {
        result += stringy[i];
    }
}

console.log(result);