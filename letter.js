var Mains = require('./main.js'); //Requires the main.js file
var Words = require('./word.js'); //Requires the word.js file

//Constructor is called from game.js and stores the chosen word
var Display = function(word){
  this.word = word; //Hangman word is stored here
  this.wordShow = ''; //Initialize wordShow variable
  this.guess = []; //Letters guessed will be pushed to this array
  this.setDisplay = function(){ //Sets the display of underscores
    this.placeholders = ''; //Initialize placeholder variable
    
    for(var i = 0; i < this.word.length; i++){ //Creates underscores the same length as the word
      this.placeholders += '_';
    }
    this.wordShow = this.placeholders; //Stores placeholders in this.wordShow
    console.log(this.wordShow.split('').join(' ')); //Display underscores with a space between them
    Mains.gamePlay(this); //Calls gamePlay function in main.js to keep game going
  }
  this.resetDisplay = function(letter){ //Resets the display of underscores and adds guessed letters
    var underscores = this.wordShow; //Stores this.wordShow in underscores variable 
    underscores = underscores.split(''); //Split the underscores into an array
    
    for(var i = 0; i < this.word.length; i++){ //Loop through the array  
      if(this.word.charAt(i) == letter){//If the selected letter matches one in the word
        underscores[i] = letter; //Replace the underscore with the letter 
        this.wordShow = underscores.join(''); //Convert the array to a string
      }
    }
    
    console.log(this.wordShow.split('').join(' ')); //Display underscores replaced with guessed letters
    Mains.gamePlay(this); //Calls gamePlay function in main.js to keep game going
  }
  this.setGuess = function(letter){ //Checks if letter has already been guessed
    var guessed = 0; //Initialize guessed variable
    for(i = 0; i < this.guess.length; i++){ //Loop through this.guess array
      if(letter == this.guess[i]){ //If a match is found the letter has already been guessed
        guessed = 1;
        console.log("You already guessed that letter. Try again :)");
        Mains.gamePlay(this); //Calls gamePlay function in main.js to keep game going
      }
    }
    if(guessed == 0){ //If no match is found
      this.guess.push(letter); //Push the letter to the guess array
      var check = new Words(this.word, this); //Call constructor in word.js and send the word and object name
      check.checkLetter(letter); //Call checkLetter function and pass the guess to it
    }
  }
}

//Makes Display constructor accessible to other files
module.exports = Display;