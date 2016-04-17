var addPlayers =  document.getElementById('addPlayer');
addPlayers.addEventListener("click", addPlayer, false);
  function addPlayer () {
    var players = prompt("How many want to play? Pick a number!"); {
      if (isNaN(players)){
        alert("Ehara tena i te nama. That's not a number");
        var players = prompt("How many want to play? Pick a number!");
      }
      else{
        alert("Feature still to come. Lets Play")
      }
    }
    /*for (var i = 0; i<=players; i++){
      //trying to add rows based on the "players"
    }*/
  }

document.addEventListener('keyup', advancePlayer, false);
  function advancePlayer(event) {
    if (event.keyCode === 81) {
      currentPosition1 = document.querySelector("#player1_strip td.active");
      nextPosition1 = currentPosition1.nextElementSibling;
      if (nextPosition1 === null){
        alert("Player 1 Wins");
        restart = document.querySelector("div.four.columns.restart");
        restart.classList.add("again");
        // reset();
      } 
      else {
      currentPosition1.classList.remove("active");
      nextPosition1.classList.add("active");
      }
    }
    if (event.keyCode === 80){
      currentPosition2 = document.querySelector("#player2_strip td.active");
      nextPosition2 = currentPosition2.nextElementSibling;
      if (nextPosition2 === null){
        alert("Player 2 Wins");{
        restart = document.querySelector("div.four.columns.restart");
        restart.classList.add("again");
        }
        // reset();
        }
      else {
      currentPosition2.classList.remove("active");
      nextPosition2.classList.add("active");
      }
    }
  };

playAgain = document.getElementById('playAgain');
playAgain.addEventListener("click", startAgain);

  function startAgain(){
    currentPosition = document.querySelectorAll("td.active");
    for (var i = 0; i < currentPosition.length; i++){
      currentPosition[i].classList.remove("active");
      }
    start1 = document.querySelector("#player1_strip td.start");
    start1.classList.add("active");
    start2 = document.querySelector("#player2_strip td.start");
    start2.classList.add("active");
  }
// function reset();
