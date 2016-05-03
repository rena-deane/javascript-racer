// Rules pop up preview window
var howToPlay = document.getElementById('rules');
howToPlay.addEventListener("mouseover", showRules);
  function showRules(){
    toolTip = document.querySelector(".container .row .tooltip span.tooltiptext")
    toolTip.classList.add("show");
  }

var leavehowToPlay = document.getElementById('rules');
leavehowToPlay.addEventListener("mouseleave", hideRules);
  function hideRules(){
    toolTip = document.querySelector(".container .row .tooltip span.tooltiptext.show")
    toolTip.classList.remove("show");
  }

//set Players
var askforPlayers = document.getElementById('addPlayers');
askforPlayers.addEventListener("click", choosePlayers);
    function choosePlayers(){
      var setPlayers = prompt("Choose your players");
        if (setPlayers=>1){
          document.getElementById('player1_strip').style.display = "initial";
          document.getElementById('player2_strip').style.display = "initial";
          document.getElementById('player3_strip').style.display = "initial";
          document.getElementById('player4_strip').style.display = "initial";
        }
        else if (isNaN(setPlayers)){
          alert("Please enter a number");
          setPlayers = prompt("How many players? Up to 4 players at a time.");
          return setPlayers;
        }
        else if (setPlayers > 4) {
          alert(setPlayers + " is over the player limit!");
          setPlayers = prompt("Please choose between 1-4 players");
          return setPlayers;
        }
        else {
          return setPlayers;
        }
      }