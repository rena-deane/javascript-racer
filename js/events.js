// Rules pop up preview window
var howToPlay = document.getElementById('rules');
howToPlay.addEventListener("click", showRules);
  function showRules(){
    toolTip = document.querySelector(".container .row .tooltipHow span.tooltiptextHow");
    toolTip.classList.add("show");
  }

var leavehowToPlay = document.getElementById('rules');
leavehowToPlay.addEventListener("mouseleave", hideRules);
  function hideRules(){
    toolTip = document.querySelector(".container .row .tooltipHow span.tooltiptextHow");
    toolTip.classList.remove("show");
  }

//set Players

// get player strips and tooltip options
