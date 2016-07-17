var Mains = require('./main.js');
//var WordLetters = require('./letter.js');
var Checker = function(wordToGuess, that){
  this.wordToGuess = wordToGuess;
  this.that = that;
  // this.wrongGuess = 1;
  this.checkLetter = function(guessLetter){
    // console.log("Checking Guess Now");
    this.guessLetter = guessLetter;
    // loop through the array
    var wrongGuess = 1;
    for(var i = 0; i < this.wordToGuess.length; i++){
      // if the selected letter matches one in the word to guess,     
      if(this.wordToGuess.charAt(i) == this.guessLetter){
        wrongGuess = 0;
        Mains.correctGuesses++;
        console.log("=========================================================");
        console.log("");
        console.log("                       Correct!                          ");
        console.log("Guesses Remaining: " + Mains.guessesRemaining);
        console.log("=========================================================");    
      }
    }
    if(wrongGuess == 0){
      //check number of guesses to see if game has been won
      if(Mains.correctGuesses == this.wordToGuess.length){
        Mains.play = 0;
        console.log("!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!");
        console.log("");
        console.log("                       You Win!                          ");
        console.log("You guessed the word " + this.wordToGuess);
        console.log("!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!=!"); 
      }else{;
        this.that.resetDisplay(this.guessLetter);
      }
    }else if(wrongGuess == 1){// if the guess was incorrect, increment the number of bad guesses
      Mains.badGuesses++;
      if(Mains.guessesRemaining > 1){
        Mains.guessesRemaining--;
        console.log("*********************************************************");
        console.log("");
        console.log("                         Wrong!                          ");
        console.log("Guesses Remaining: " + Mains.guessesRemaining);
        console.log("*********************************************************");
        this.that.resetDisplay(this.guessLetter);
      }else{
        console.log("##########################################################");
        console.log("");
        console.log("                       You Lose!                          ");
        console.log("The word was " + this.wordToGuess);
        console.log("##########################################################");
      }
    }
  }

}

module.exports = Checker;