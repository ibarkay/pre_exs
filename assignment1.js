//Quiz

'use-strict';
const input = require('readline-sync');
let results = 0
let QestuionCunter = 1

let wellcomeMsg = "Wellcom to are you leet or noob? Quiz!"
console.log("#".repeat(wellcomeMsg.length)  +"\n"+ wellcomeMsg+'\n'+"#".repeat(wellcomeMsg.length)+"\n"+"Question #"+QestuionCunter);
let options = [];
let indexy =  0;
let dicky = [];

function printIt(options,question,vaules) {
    
    options = options;
    dicky = vaules;
    //console.log(dicky);
    indexy = input.keyInSelect(options,question);
    results += dicky[indexy]
    QestuionCunter += 1;
    //console.log(results);
}
  
printIt(['fire fox','chrome','edge','oepra'], 'You surff the web in what app ?',[1,3,4,2]);
printIt(['vi','word','notepad','nano'], 'You edit files in what app ?',[2,4,3,1]);
printIt(['ssh','rdesktop','winrm','netcat'], 'You remote control in what app ?',[2,4,3,1]);
printIt(['linux','windows','OSX','freeBSD'], 'what is your favorite OS ?',[1,4,3,2]);
printIt(['python','javascript','C','ruby'], 'favorite programing lang ?',[2,3,1,4]);

let leetOrNoob = ["y0u ar3 31337!","You are a Skid.","you are a N00B!"];
console.log("-".repeat(wellcomeMsg.length)+'\nResults:');
if (results <= 10){
    console.log(leetOrNoob[0]);
}
if (results> 10 && results <= 15){
    console.log(leetOrNoob[1]);
}else if (results > 15) {
    console.log(leetOrNoob[2]);
}