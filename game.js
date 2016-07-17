var Letters = require('./letter.js');

var Game = function(category){
  this.category = category;
  this.listState = ['alaska', 'california', 'colorado', 'texas', 'nevada', 'arizona', 'maryland'];
  this.listMovie = ['goonies', 'avengers', 'rudy', 'caddyshack', 'armageddon', 'goodfellas', 'alien'];
  this.listPeople = ['madonna', 'obama', 'trump', ''];
  this.gameOn = function(){
    if(this.category == 'States'){
      console.log("States it is!");
      title();
      this.wordToGuess = this.listState[Math.floor(Math.random()*this.listState.length)];
      var sendWord = new Letters(this.wordToGuess);
      sendWord.setDisplay();
    }else if(this.category == 'Movies'){
      console.log("Movies it is!");
      title();
      this.wordToGuess = this.listMovie[Math.floor(Math.random()*this.listMovie.length)];
      var sendWord = new Letters(this.wordToGuess);
      sendWord.setDisplay();
    }else if(this.category == 'People'){
      console.log("People it is!");
      title();
      this.wordToGuess = this.listPeople[Math.floor(Math.random()*this.listPeople.length)];
      var sendWord = new Letters(this.wordToGuess);
      sendWord.setDisplay();
    }else{
      console.log("Something is broken :(");
    }
  }
}

function title(){

  console.log("");
      console.log(`██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███╗   ███╗ █████╗ ███╗   ██╗
██║  ██║██╔══██╗████╗  ██║██╔════╝ ████╗ ████║██╔══██╗████╗  ██║
███████║███████║██╔██╗ ██║██║  ███╗██╔████╔██║███████║██╔██╗ ██║
██╔══██║██╔══██║██║╚██╗██║██║   ██║██║╚██╔╝██║██╔══██║██║╚██╗██║
██║  ██║██║  ██║██║ ╚████║╚██████╔╝██║ ╚═╝ ██║██║  ██║██║ ╚████║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
                                                                `);

}

module.exports = Game;