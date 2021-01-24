'use-strict';

let arr = [1,2,3,4,5,6,7,8];

console.log(arr.length); // 8

arr.push(9);
arr.unshift(0);

console.log(arr);

arr.pop();
arr.shift();
console.log(arr);

arr.splice(0,2,'a','b'); //cool as fuck.
console.log(arr);

arr.reverse();
console.log(arr);
arr.sort();
console.log(arr);

console.log([3,1000,20].sort(function (a,b){
    return a -b ;
})); // vrey cool

console.log(arr.join('-'));

