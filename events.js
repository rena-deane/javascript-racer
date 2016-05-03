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


// function reset();
