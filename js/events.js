// Rules pop up preview window
var howToPlay = document.getElementById('rules');
howToPlay.addEventListener("mouseover", showRules);
  function showRules(){
    toolTip = document.querySelector(".container .row .tooltipHow span.tooltiptextHow")
    toolTip.classList.add("show");
  }

var leavehowToPlay = document.getElementById('rules');
leavehowToPlay.addEventListener("mouseleave", hideRules);
  function hideRules(){
    toolTip = document.querySelector(".container .row .tooltipHow span.tooltiptextHow.show")
    toolTip.classList.remove("show");
  }

//set Players
var choosePlayers = document.getElementById('setPlayers');
choosePlayers.addEventListener("mouseover", showPlayers);
  function showPlayers(){
    toolTip = document.querySelector(".container .row .tooltipPlayers span.tooltiptextPlayers")
    toolTip.classList.add("show");
  }

var leavechoosePlayers = document.getElementById('setPlayers');
leavechoosePlayers.addEventListener("mouseleave", hidePlayers);
  function hidePlayers(){
    toolTip = document.querySelector(".container .row .tooltipPlayers span.tooltiptextPlayers.show")
    toolTip.classList.remove("show");
  }