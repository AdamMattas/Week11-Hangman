var Letters = require('./letter.js');

var Game = function(category){
  this.category = category;
  this.listScience = ['future', 'temporal', 'wormhole'];
  this.listMovie = ['goonies', 'avengers', 'rudy'];
  this.listPeople = ['madonna', 'obama', 'trump'];
  this.gameOn = function(){
    if(this.category == 'Science'){
      console.log("Science it is!");
      this.wordToGuess = this.listScience[Math.floor(Math.random()*this.listScience.length)];
      var sendWord = new Letters(this.wordToGuess);
      sendWord.setDisplay();
    }else if(this.category == 'Movie'){
      console.log("Movie it is!");
      this.wordToGuess = this.listMovie[Math.floor(Math.random()*this.listMovie.length)];
      var sendWord = new Letters(this.wordToGuess);
      sendWord.setDisplay();
    }else if(this.category == 'People'){
      console.log("People it is!");
      this.wordToGuess = this.listPeople[Math.floor(Math.random()*this.listPeople.length)];
      var sendWord = new Letters(this.wordToGuess);
      sendWord.setDisplay();
    }else{
      console.log("Something is broken :(");
    }
  }
}

module.exports = Game;