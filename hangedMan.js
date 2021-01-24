//hanged-Man by ibarkay.

'use-strict';

//imports
let input = require('readline-sync');
let figlet = require('figlet');
console.log(figlet.textSync('Hanged Man!', {
    font: 'shadow', 
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 160,
    whitespaceBreak: true
}));

//globals
let guesses = 10;
let words = ['camera','client','srver','hacking','israel','appleseed','school']; 
run = true;



//functions
function choise(listy){
    let indexy = Math.floor(Math.random() * listy.length);
    return listy[indexy];
}

let secretWord = choise(words);
let hashedWord = new Array(secretWord.length);
hashedWord.fill('*');

//game-loop
while (run){ 
    console.log(`you have ${guesses} guesses\nThe word is : \n`+hashedWord.join(''));
    let guese = input.question('What is your guese ? \n').toLowerCase();
    //console.log(parseInt(guese));
    if (guese.length == 1 && guese.match(/[a-z]/i) ){
        if (guesses != 0 ){
            if (secretWord.includes(guese)){
                for (let i = 0; i < hashedWord.length; i++){
                    if (guese == secretWord[i]) {
                        hashedWord[i] = guese;
                    }
                }
            }else {
                guesses -= 1;
            }
            if (guesses == 0 ){
                console.log(figlet.textSync(':(', {
                    font: 'shadow',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 160,
                    whitespaceBreak: true
                }));
                console.log('No more gueses for you , BYE!')
                run = false;
            }
            if (!hashedWord.join('').includes('*')){
                console.log(figlet.textSync('Congratz!', {
                    font: 'shadow',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                    width: 160,
                    whitespaceBreak: true
                }));
                console.log('You Guessed RIGHT, and finished the game.')
                run = false;
            }
        }
    }else {
        console.log('Invalid input! , please type ONE letter. ')
    }
        
    
}
