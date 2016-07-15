var Mains = require('./main.js');
var Words = require('./word.js');

var Display = function(word){
  this.word = word;
  this.play = 0;
  this.setDisplay = function(){
    this.wordLength = this.word.length;
    // create row of underscores the same length as letters to guess
    for(var i = 0; i < this.wordLength; i++){
      this.placeholders += '_ ';
    }
    this.wordShow = this.placeholders;
    console.log(this.wordShow);
    console.log(this.word);
    Mains.gamePlay(this.play);
  }
}

module.exports = Display;