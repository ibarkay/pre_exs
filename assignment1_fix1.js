//Quiz *fixed*

//imports
'use-strict';
const input = require('readline-sync');
//globals
let results = 0
let QestuionCunter = 1
let wellcomeMsg = "Wellcom to are you leet or noob? Quiz!" 
let leetOrNoob = ["y0u ar3 31337!","You are a Skid.","you are a N00B!"];
let indexy =  0;
let bank = [[{'fire fox':1,'chrome':3,'edge':4,'oepra':2}, 'You surff the web in what app ?'], 
[{'vi':2,'word':4,'notepad':3,'nano':1}, 'You edit files in what app ?'], 
[{'ssh':2,'rdesktop':4,'winrm':3,'netcat':1}, 'You remote control in what app ?'],
[{'linux':1,'windows':4,'OSX':3,'freeBSD':2}, 'what is your favorite OS ?'],
[{'python':2,'javascript':3,'C':1,'ruby':4}, 'favorite programing lang ?']] //new datatype to orgnaize 
//gretting  -- only once :)
console.log("#".repeat(wellcomeMsg.length)  +"\n"+ wellcomeMsg+'\n'+"#".repeat(wellcomeMsg.length));
//function
function Quizit(options,question) {
    console.log("*#".repeat(10)+"\nQuestion #"+QestuionCunter+"\n"+"*#".repeat(10));
    
    options = options;
    indexy = input.keyInSelect(options,question,{cancel: 'Exit game !'});
    if (indexy !== -1){
        results += bank[QestuionCunter -1][0][options[indexy]]; //the magic :)
        //console.log(options[indexy]);
        //console.log(results);
        QestuionCunter += 1;
    }else {
        throw 'Exiting game...'  //deal with user choise 0
    }
    
}
//exec
for (let i = 0; i < bank.length; i++){
    Quizit(Object.keys(bank[i][0]),bank[i][1]);
    //console.log(Object.keys(bank[i][0]));
}
//result
console.log("-".repeat(wellcomeMsg.length)+'\nResults:');
if (results <= 10){
    console.log(leetOrNoob[0]);
}
if (results> 10 && results <= 15){
    console.log(leetOrNoob[1]);
}else if (results > 15) {
    console.log(leetOrNoob[2]);
}
//thanx for reviewing.