//Good Restaurant by ibarkay
'use-strict';
const input = require('readline-sync');

let ppl = parseInt(input.question('How many people are you going with?'));
if (Number.isInteger(ppl)){
    //pass
}else {
    throw "stop execution";
}
let kosher = input.question('Should it be Kosher? (y/n)');
if (kosher == "y"){
    let kosherMehadrin = input.question('Should it be Kashrut Lemehadrin? (y/n)');
    console.log(kosherMehadrin);
    if (kosherMehadrin != "y" && kosherMehadrin != "n"){
        throw "stop execution";
    }else {
        if (kosherMehadrin == "y"){
            kosher += "m"
        }
    }
}else {
    if (kosher != "y" && kosher != "n"){
            throw "stop execution";
    } 
}

let food = ['pizza','fish','japanese','italian','shnitzel']
let indexy = input.keyInSelect(food, 'What kind of food do you want?');//new and cool to me.
//console.log(ppl,kosher,indexy);
function recomand(ppl,kosher,indexy){
    if (ppl <3 || kosher == "ym" || food[indexy] == 'shnitzel'){
        console.log('I recomend you eat at home.');
    }else {
        console.log('I recomend you eat in The "shook".');
    }
}

recomand(ppl,kosher,indexy);
