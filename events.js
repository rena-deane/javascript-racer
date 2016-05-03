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
  function choosePlayers(num){
    var setPlayers = prompt("How many players? Up to 4 players at a time.");
    if (isNaN(setPlayers)){
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
      return setPlayers
    }
  }