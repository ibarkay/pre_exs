'use-strict';
//class
//prototype is cool.

//let newObj = {};
//Object.prototype.mySpeacialProperty = 'speacial';
//console.log(newObj.mySpeacialProperty);

let arr = [1,2,3];
if (!Array.prototype.head){
    Array.prototype.head = function () {return this[0];} // this - is cool.
}
console.log(arr.head());

let newObj = {
    prop1 :'property1'
};
Object.keys(newObj).forEach(function (item) {
    console.log(newObj[item]);
})
