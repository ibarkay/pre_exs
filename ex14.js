//min-max by ibarkay.
'use-strict';
let input = require('readline-sync');

let integery = parseInt(input.question('Please enter a vaild positive number : '));
let arr = new Array(integery);
for (let i = 0; i < arr.length; i++){
    arr[i] = Math.floor(Math.random() * 50) + 1;
}
arr.sort(function (a,b){
    return a-b;
});
console.log(`Min is : ${arr[0]}\nMax is : ${arr[arr.length -1]}`);
