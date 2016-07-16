var Mains = require('./main.js');
var Words = require('./word.js');

var Display = function(word){
  this.word = word;
  this.wordShow = '';
  this.guess = [];
  this.setDisplay = function(){
    this.placeholders = '';
    this.wordLength = this.word.length;
    // create row of underscores the same length as letters to guess
    for(var i = 0; i < this.wordLength; i++){
      this.placeholders += '_';
    }
    this.wordShow = this.placeholders;
    console.log(this.wordShow);
    console.log(this.word);
    Mains.gamePlay(this);
  }
  this.resetDisplay = function(letter){
    // this.placeholders = '';
    // this.wordLength = this.word.length;
    // // create row of underscores the same length as letters to guess
    // for(var i = 0; i < this.wordLength; i++){
    //   this.placeholders += '_';
    // }
    var placeholders = this.wordShow;
    // split the placeholders into an array
    placeholders = placeholders.split('');
    // loop through the array
    for(var i = 0; i < this.wordLength; i++){
      // if the selected letter matches one in the word to guess,
      // replace the underscore and increase the number of correct guesses
      if(this.word.charAt(i) == letter){
        placeholders[i] = letter;

        // convert the array to a string and display it again
        this.wordShow = placeholders.join('');
        //plays correct key sound
        
      }
    }
    // this.wordShow = this.placeholders;
    console.log(this.wordShow);
    console.log(this.word);
    Mains.gamePlay(this);
  }
  this.setGuess = function(x){
    //console.log("Working!");
    //Switched var guessed to number instead of true/false. It was causing problems???
    var guessed = 0;
    var letter = x.toLowerCase();
    for(i = 0; i < this.guess.length; i++){
      if(letter == this.guess[i]){
        guessed = 1;
        console.log("You already guessed that letter. Try again :)");
        Mains.gamePlay(this);
      }
    }
    if(guessed == 0){
      //console.log("Still Working!");
      this.guess.push(letter);
      console.log(this.word);
      var check = new Words(this.word, this);
      check.checkLetter(letter);
    }
  }
}

module.exports = Display;