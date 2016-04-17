var addPlayers =  document.getElementById('addPlayer')

addPlayers.addEventListener("click", addPlayer, false);
  function addPlayer () {

  }

document.addEventListener('keyup', advancePlayer, false);
  function advancePlayer(event) {
    if (event.keyCode === 81) {
      currentPosition1 = document.querySelector("#player1_strip td.active");
      nextPosition1 = currentPosition1.nextElementSibling;
      if (nextPosition1 === null){
        alert("Player 1 Wins");
        // reset();
          // announceWinner = document.getElementById("winner")
          // announceWinner.innerHTML = "Player 1 Wins";
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
        alert("Player 2 Wins");
        // reset();
          // announceWinner = document.getElementById("winner")
          // announceWinner.innerHTML = "Player 2 Wins";
        }
      else {
      currentPosition2.classList.remove("active");
      nextPosition2.classList.add("active");
      }
    }
  };

// function reset();
