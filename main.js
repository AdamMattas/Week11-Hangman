//Set variables and imports
var Words = require('./word.js'); //Requires the word.js file
var Letters = require('./letter.js'); //Requires the letter.js file
var Games = require('./game.js'); //Requires the game.js file
var inquirer = require('inquirer'); //Requires the inquirer npm for prompts & inputs
var correctGuesses = 0; //Keeps track of correct guesses
var badGuesses = 0; //Keeps track of incorrect guesses
var guessesRemaining = 10; //Allows user to have 10 incorrect guesses before losing
var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

inquirer.prompt([ //Prompt the user to start the game

  {
    type: "list", //Specifies type of input
    name: "start", //Name is used to access user input
    message: "Are you ready to play hangman?", //Message displayed to the user
    choices: ["Yes", "No"] //List of options available in the list
  }

]).then(function(answers){ //Runs after the user makes a selection

  if(answers.start == "Yes"){ //Ckecks if user selected Yes
    
    inquirer.prompt([ //Prompt the user to select category

      {
        type: "list", //Specifies type of input
        name: "category", //Name is used to access user input
        message: "Select a category.", //Message displayed to the user
        choices: ["States", "Movies", "Cars"] //List of options available in the list
      }

    ]).then(function(answers){ //Runs after the user makes a selection

      var goNow = new Games(answers.category); //Calls the constructor in game.js using the category selected
      goNow.gameOn(); //Calls the gameOn function in the object that was constructed on the line above

    })

  }else if (answers.start == "No"){ //Ckecks if user selected No
    //Log a response to the console and the application stops running
    console.log("=========================================================");
    console.log("");
    console.log("If you didn't want to play why did you come to the party?");
    console.log("");
    console.log("=========================================================");

  }

})

//This function will be called after the user guesses a letter (unless the game is won or lost)
var gamePlay = function(that){ //(that) parameter is the name of the object from letter.js

    inquirer.prompt([ //Prompt the user to guess a letter

      {
        type: "input", //Specifies type of input
        name: "guess", //Name is used to access user input
        message: "Guess a letter!" //Message displayed to the user
      }
    //Send letter to checker
    ]).then(function(answers){ //Runs after the user inputs a choice

      var valid; //Initialize valid variable
      var letter = answers.guess.toLowerCase(); //Convert guess to lowercase
      for(i = 0; i < options.length; i++){ //Loop through options array
        if(letter == options[i]){ //If the input matches an option in the array
          valid = 1; //Set valid variable to 1     
        }
      }
      if(valid == 1){ //If input is valid
        //Call the setGuess function in (that) object and pass the letter guessed
        that.setGuess(letter);  
      }
      else{ //If input is invalid
          console.log("Only letters will be accepted. Please try again :)");
          gamePlay(that); //Run gamePlay function to keep game going
        }
      
    })

}

//Make variables accessible to other files
exports.gamePlay = gamePlay;
exports.correctGuesses = correctGuesses;
exports.badGuesses = badGuesses;
exports.guessesRemaining = guessesRemaining;