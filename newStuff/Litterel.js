'use-strict';
// ``
let template = `this is a temple literel`;
let a = '5',
    b = 'something';
console.log(`a is ${a},while b is ${b} and ${reverse(template)} is reversed.`); //very-cool !

function reverse(string){
    return string.split('').reverse().join('');
}