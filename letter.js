var Mains = require('./main.js');
var Words = require('./word.js');

var Display = function(word){
  this.word = word;
  this.guess = [];
  this.setDisplay = function(){
    this.wordLength = this.word.length;
    // create row of underscores the same length as letters to guess
    for(var i = 0; i < this.wordLength; i++){
      this.placeholders += '_ ';
    }
    this.wordShow = this.placeholders;
    console.log(this.wordShow);
    console.log(this.word);
    Mains.gamePlay(this);
  }
  this.setGuess = function(x){
    console.log("Working!");
    var letter = x.toLowerCase();
    for(i = 0; i < this.guess.length; i++){
      if(letter == this.guess[i]){
        var guessed = true;
      }
    }
    if(!guessed){
      console.log("Still Working!");
      this.guess.push(letter);
      console.log(this.word);
      var check = new Words(this.word, this);
      // console.log(check);
      check.checkLetter(letter);
    }
  }
}

module.exports = Display;