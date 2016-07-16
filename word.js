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
        console.log("Correct!");
        console.log("Guesses Remaining: " + Mains.guessesRemaining);    
      }
    }
    if(wrongGuess == 0){
      //check number of guesses to see if game has been won
      if(Mains.correctGuesses == this.wordToGuess.length){
        Mains.play = 0;
        console.log("You Win!!!");
        console.log("The word was " + this.wordToGuess)
      }else{
        //Mains.gamePlay(this.that);
        this.that.resetDisplay(this.guessLetter);
      }
    }else if(wrongGuess == 1){// if the guess was incorrect, increment the number of bad guesses
      Mains.badGuesses++;
      console.log("Wrong!!!");
      //plays INcorrect key sound
      if(Mains.guessesRemaining > 1){
        Mains.guessesRemaining--;
        // console.log("Correct Guesses: " + Mains.correctGuesses);
        // console.log("Bad Guesses: " + Mains.badGuesses);
        console.log("Guesses Remaining: " + Mains.guessesRemaining);
        // Mains.gamePlay(this.that);
        this.that.resetDisplay(this.guessLetter);
        //console.log(that.wordShow);
      }else{
        console.log("You lose!")
        console.log("The word was " + this.wordToGuess)
      }
    }
  }

}

module.exports = Checker;