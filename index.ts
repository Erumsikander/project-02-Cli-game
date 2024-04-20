#! /usr/bin/env node

import inquirer from "inquirer";

// computer will generate a random number: Done

// user input for number guessing: Done 

// compare user input with computer generated number  and show result: Done

const randomNumber = Math.floor(Math.random() * 6 + 1);


// console.log(randomNumber);

const answers = await inquirer.prompt([
    {
name : "userGuessNumber",
type : "number",
message : "Please guess a number between 1-6: ",
    },
]);
if(answers.userGuessNumber === randomNumber)
    {
console.log("COngrasulations! You guessed right number.")
}
else {
console.log("Opps! You guessed wrong number.")
}