'use-strict';

let vary = [1,2,3];

for  ( let x = 0; x < vary.length; x += 1){
    console.log(vary[x]);
}

let obj = {
    key1:'value1',
    key2:'value2',
    key3:'value3'
};
for (let prop in obj){
    console.log('ket is : ',prop,' value is : ',obj[prop]);

}