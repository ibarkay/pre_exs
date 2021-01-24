'use-strict';
let input = require('readline-sync');
//Example: “Ma Kore Neshama?” will print “Ma*Kore*Neshama?”

let stringy = input.question('Please enter a String : ');
console.log(stringy.replace(/\s/g,'*'));
