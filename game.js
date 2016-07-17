var Letters = require('./letter.js'); //Requires the letter.js file

var Game = function(category){ //This constructor is called from main.js to start a new game
  this.category = category; //Category selected will be stored here
  this.listState = ['alaska', 'california', 'colorado', 'texas', 'nevada', 'arizona', 'maryland', 'ohio'];
  this.listMovie = ['goonies', 'avengers', 'rudy', 'caddyshack', 'armageddon', 'goodfellas', 'alien'];
  this.listCar = ['mustang', 'corvette', 'hummer', 'lamborghini', 'maserati', 'viper', 'porsche'];
  this.gameOn = function(){ //Check the category name and execute appropriate condition
    switch(this.category){
      case "States": //If the user selected States, run this case
        console.log("States it is!");
        title(); //Call title function below
        //Selects a random word from the chosen category
        this.wordToGuess = this.listState[Math.floor(Math.random()*this.listState.length)];
        //Constructs a new object for the random word in letter.js
        var sendWord = new Letters(this.wordToGuess);
        //Calls the setDisplay function in the new object
        sendWord.setDisplay();
        break; //Stops execution of switch statement
      case "Movies": //If the user selected Movies, run this case
        console.log("Movies it is!");
        title(); //Call title function below
        //Selects a random word from the chosen category
        this.wordToGuess = this.listMovie[Math.floor(Math.random()*this.listMovie.length)];
        //Constructs a new object for the random word in letter.js
        var sendWord = new Letters(this.wordToGuess);
        //Calls the setDisplay function in the new object
        sendWord.setDisplay();
        break; //Stops execution of switch statement
      case "Cars":
        console.log("Cars it is!"); //If the user selected Cars, run this case
        title(); //Call title function below
        //Selects a random word from the chosen category
        this.wordToGuess = this.listCar[Math.floor(Math.random()*this.listCar.length)];
        //Constructs a new object for the random word in letter.js
        var sendWord = new Letters(this.wordToGuess);
        //Calls the setDisplay function in the new object
        sendWord.setDisplay();
        break; //Stops execution of switch statement
      default:
        //Runs if no cases match the answer
        console.log("Something is broken :(");      
    }
  }
}

function title(){ //Logs Hangman ascii art to the console

  console.log("");
      console.log(`██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███╗   ███╗ █████╗ ███╗   ██╗
██║  ██║██╔══██╗████╗  ██║██╔════╝ ████╗ ████║██╔══██╗████╗  ██║
███████║███████║██╔██╗ ██║██║  ███╗██╔████╔██║███████║██╔██╗ ██║
██╔══██║██╔══██║██║╚██╗██║██║   ██║██║╚██╔╝██║██╔══██║██║╚██╗██║
██║  ██║██║  ██║██║ ╚████║╚██████╔╝██║ ╚═╝ ██║██║  ██║██║ ╚████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
                                                                `);

}

//Makes Game constructor accessible to other files
module.exports = Game;