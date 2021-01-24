'use-strict';

let stringy = 'hi im a string!';

console.log(stringy.length);
let arry = stringy.split(' ');
console.log(arry);


console.log(stringy.indexOf('im'));
console.log(stringy.lastIndexOf('a'));

console.log(stringy.toUpperCase());

console.log(stringy.substring(6,7));

console.log(stringy.slice(-6)); //negative numbers possibale.

console.log("        test        ".trim());