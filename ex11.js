//isPalindrome? by ibarkay.
'use-strict';
let input = require('readline-sync');

let stringy = input.question("Please enter a word/number to check if it's Palindrome : ");
//console.log(stringy.split('').reverse().join(''));
if (stringy.split('').reverse().join('') === stringy){
    console.log(stringy+" - is a Palindrome");
}else {
    console.log(stringy + " - is not a Palindrome.")
}
