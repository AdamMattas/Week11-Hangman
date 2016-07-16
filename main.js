//Set variables and imports
var Words = require('./word.js');
var Letters = require('./letter.js');
var Games = require('./game.js');
var inquirer = require('inquirer');
var play = 1;
var correctGuesses = 0;
var badGuesses = 0;
var guessesRemaining = 10;

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

    //Choose a category
    inquirer.prompt([

      {
        type: "list",
        name: "category",
        message: "Select a category.",
        choices: ["Science", "Movie", "People"]
      }

    ]).then(function(answers){

      var goNow = new Games(answers.category);
      //console.log(goNow.category);
      goNow.gameOn();
      //console.log(goNow.word);

    })

  }
  // If the user doesn't guess the password...
  else if (answers.start == "No"){

    console.log("=========================================================");
    console.log("");
    console.log("If you didn't want to play why did you come to the party?");
    console.log("");
    console.log("=========================================================");

  }

})

var gamePlay = function(that){
  if (play == 1){

    //Guess a letter
    inquirer.prompt([

      {
        type: "input",
        name: "guess",
        message: "Guess a letter!"
      }
    //Send letter to checker
    ]).then(function(answers){
      //console.log(that.word);
      that.setGuess(answers.guess);
      
    })

  }
}

exports.gamePlay = gamePlay;
exports.correctGuesses = correctGuesses;
exports.badGuesses = badGuesses;
exports.guessesRemaining = guessesRemaining;