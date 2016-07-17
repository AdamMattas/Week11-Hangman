var Mains = require('./main.js'); //Requires the main.js file

//Constructor is called from letter.js and stores the word and guess
var Checker = function(wordToGuess, that){
  this.wordToGuess = wordToGuess; //Hangman word is stored here
  this.that = that; //Name of object created in letter.js is stored here for reference
  this.checkLetter = function(guessLetter){ //Checks guess against hangman word
    var wrongGuess = 1; //wrongGuess variable is initialized
    for(var i = 0; i < this.wordToGuess.length; i++){ //Loop through the hangman word     
      if(this.wordToGuess.charAt(i) == guessLetter){ //If a letter matches one in the hangman word
        wrongGuess = 0; //Change variable to 0
        Mains.correctGuesses++; //Increment the number of correct guesses   
      }
    }
    if(wrongGuess == 0){ //If the guess was correct    
      if(Mains.correctGuesses == this.wordToGuess.length){ //Check if the game has been won
        //Display winning message in the console and show word
        console.log("!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!");
        console.log("");
        console.log("                       You Win!                          ");
        console.log("You guessed the word " + this.wordToGuess);
        console.log("!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!"); 
      }else{
        //Display correct message in the console and show guesses remaining
        console.log("=========================================================");
        console.log("");
        console.log("                       Correct!                          ");
        console.log("Guesses Remaining: " + Mains.guessesRemaining);
        console.log("========================================================="); 
        this.that.resetDisplay(guessLetter); //Call function to redisplay the word
      }
    }else if(wrongGuess == 1){ //If the guess was incorrect
      Mains.badGuesses++; //Increment the number of bad guesses
      if(Mains.guessesRemaining > 1){ //Check if the game has been lost
        Mains.guessesRemaining--; //Decrement number of guesses remaining
        //Display wrong message in the console and show guesses remaining
        console.log("*********************************************************");
        console.log("");
        console.log("                         Wrong!                          ");
        console.log("Guesses Remaining: " + Mains.guessesRemaining);
        console.log("*********************************************************");
        this.that.resetDisplay(guessLetter); //Call function to redisplay the word
      }else{
        //Display losing message in the console and show word
        console.log("##########################################################");
        console.log("");
        console.log("                       You Lose!                          ");
        console.log("The word was " + this.wordToGuess);
        console.log("##########################################################");
      }
    }
  }

}

//Makes Checker constructor accessible to other files
module.exports = Checker;