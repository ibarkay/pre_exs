//Longest Word
//Example: “Hello dear Bootcamper” will print “Bootcamper”
//TODDO : numbers and sumboles are not word !!!
'use-strict';
let input = require('readline-sync');
let stringy = input.question('Please enter a string : ');

let listy = stringy.split(' ');
function striping (word){
    let strip = "";
    for (var i = 0; i < word.length; i++){
        if (word[i].match(/[a-z]/i)){
            strip += word[i];
        }
    }
}
console.log(listy);
listy.sort(function (a,b){
    return b.length - a.length;
});
console.log(listy[0]);