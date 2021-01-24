'use-strict';

let arr = [1,2,3];

for (let val of arr){
    console.log("the value is : ",val);

}

let mySet = new Set();
mySet.add('x').add('y').add('z');

for (let val of mySet){
    console.log(val);

}