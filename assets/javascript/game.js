var alphabet = ['a','b','c','d','e', 'f']

document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];


      if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') || (userGuess == 'd') || (userGuess == 'e')){

      if ((userGuess == 'a') && (computerPick == 'a')){
      wins++;
      }else if ((userGuess == 'b') && (computerPick == 'a')){
      losses++;
      }else if ((userGuess == 'c') && (computerPick == 'a')){
      losses++;
      }else if ((userGuess == 'd') && (computerPick == 'a')){
      losses++;
      }else if ((userGuess == 'e') && (computerPick == 'a')){
      losses++;


      if ((userGuess == 'b') && (computerPick == 'b')){
      wins++;
      }else if ((userGuess == 'c') && (computerPick == 'b')){
      losses++;
      }else if ((userGuess == 'd') && (computerPick == 'b')){
      losses++;
      }else if ((userGuess == 'e') && (computerPick == 'b')){
      losses++;
      
      if ((userGuess == 'c') && (computerPick == 'c')){
      wins++;
      }else if ((userGuess == 'd') && (computerPick == 'c')){
      losses++;
      }else if ((userGuess == 'e') && (computerPick == 'c')){
      losses++;

      if ((userGuess == 'd') && (computerPick == 'd')){
      wins++;
      }else if ((userGuess == 'e') && (computerPick == 'd')){
      losses++;

      }


    var html = "<p>Press a,b,c,d, or e </p>" +
    "<p>wins: " + 
    wins + 
    "</p>" +
    "<p>losses: " + 
    losses + 
    "</p>" +
    "<p>ties: " + 
    ties + 
    "</p>";
  }
  
    document.querySelector('#game').innerHTML = html;
  };
