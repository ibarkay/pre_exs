//Game Of War by ibarkay.
'use-strict';
let input = require('readline-sync');

//globals
let run = true;
let cash = 50
let wellcomeMesg = "[♥]]] [♦]]] [♣]]] [♠]]] WAR! [♥]]] [♦]]] [♣]]] [♠]]]"
console.log(wellcomeMesg);
let name = input.question('Please enter your name : ')
let greeting = `Welcome ${name} you got : ${cash} ILS.\nLets start ...`
console.log(greeting);

//game-loop
do {
    let bet = parseInt(input.question(`Place your bet for the next round - 1 to ${cash} :`));

//TODO : fix it ! - check if value is valid in samll block.
if (bet > cash ) {
    throw `${name} i told you 1 -${cash} , you entered ${bet} ! , bye bye `
    }else if (bet < 1 || isNaN(bet)){
        throw `${name} ... come on ... it's a invalid number!, bye`
    }

    //value is ok ... lets go on
    let userCard = Math.floor(Math.random() * 12) + 1; //random 1-12 card
    let pcCard = Math.floor(Math.random() * 12) + 1; 
    console.log(`Your card is : ${userCard}, myen is : ${pcCard}`);

    //calculate resulte
    if (userCard > pcCard){
        cash += bet
        console.log(`You WON ${bet} now you have ${cash}!!!`)
    }else {
        cash -= bet;
        console.log(`You LOST ${bet} now you have ${cash}`)
    }
    //TODO: fix this switch case (not nesesery) .
    if (!cash <= 0){
        let option = parseInt(input.question("\nWhat would you like to do ?\n1. Play another round\n2. Leave with my money !\n"));
        if (option == 1){
            //pass
        }else {
            console.log('ok bye.');
            run = false;
        }
    }else {
        console.log(`${name} You lost all you money. C ya!`);
        run = false;
    }
}while (run);


