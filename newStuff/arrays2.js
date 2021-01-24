'use-strict';

let array = ['x','y','z'];

array.forEach(function(currentItem){
    console.log(currentItem);
})

array.some(function (currentItem){
    console.log('iterating...');
    return currentItem === 'y';
})

array.every(function (currentItem){
    console.log('also ..');
    return currentItem !=='x';
})

let arr = [1,2,3,4,5];
let sum = arr.reduce(function (previoes,current){
    return previoes + current;
})

console.log(sum);

let refs = {
    a:'alpha',
    b:'beta',
    g:'gama'
};
let arr2 = ['a','b','g'];
let result = arr2.map(function (currentItem){
    return refs[currentItem];
})
console.log(result);