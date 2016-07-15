//Set variables and imports
var Words = require('./word.js');
var Letters = require('./letter.js');
var Games = require('./game.js');
var inquirer = require('inquirer');

//Prompt user to start game
inquirer.prompt([

  {
    type: "list",
    name: "start",
    message: "Are you ready to play hangman?",
    choices: ["Yes", "No"]
  }

]).then(function(answers){

  if (answers.start == "Yes"){

    //Grab hangman word

  }
  // If the user doesn't guess the password...
  else if (answers.start == "No"){

    console.log("==============================================");
    console.log("");
    console.log("If you didn't want to play why did you come to the party?");
    console.log("");
    console.log("==============================================");

  }

})

//Display 