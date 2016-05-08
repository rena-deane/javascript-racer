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
var get1Player = document.getElementById('player1');
get1Player.addEventListener("click", function(){
    document.getElementById('player1_strip').style.display = "inherit";
    document.getElementById('player2_strip').style.display = "none";
    document.getElementById('player3_strip').style.display = "none";
    document.getElementById('player4_strip').style.display = "none";
  });

var get2Player = document.getElementById('player2');
get2Player.addEventListener("click", function(){
    document.getElementById('player1_strip').style.display = "inherit";
    document.getElementById('player2_strip').style.display = "inherit";
    document.getElementById('player3_strip').style.display = "none";
    document.getElementById('player4_strip').style.display = "none";
  });

var get3Player = document.getElementById('player3');
get3Player.addEventListener("click", function(){
    document.getElementById('player1_strip').style.display = "inherit";
    document.getElementById('player2_strip').style.display = "inherit";
    document.getElementById('player3_strip').style.display = "inherit";
    document.getElementById('player4_strip').style.display = "none";
  });

var get4Player = document.getElementById('player4');
get4Player.addEventListener("click", function(){
    document.getElementById('player2_strip').style.display = "inherit";
    document.getElementById('player1_strip').style.display = "inherit";
    document.getElementById('player3_strip').style.display = "inherit";
    document.getElementById('player4_strip').style.display = "inherit";
  });

// set track length
  // add to track
var addTracks = document.getElementById("longerTrack");
addTracks.addEventListener("click", function(){
  var lengthTrack = document.querySelectorAll("#player1_strip td");
  if (lengthTrack.length <=10){
    $("#player1_strip").append(HTMLaddtoTrack);
    $("#player2_strip").append(HTMLaddtoTrack);
    $("#player3_strip").append(HTMLaddtoTrack);
    $("#player4_strip").append(HTMLaddtoTrack);
  }
  else {
    alert("No more room for extra tracks");
  } 
});

  // lessen track
var removeTracks = document.getElementById('shorterTrack');
removeTracks.addEventListener("click", function(){
  var newLength = $("#player1_strip td").length;
  if (newLength > 2){
    $("#player1_strip td:last").remove();
    $("#player2_strip td:last").remove();
    $("#player3_strip td:last").remove();
    $("#player4_strip td:last").remove();
  }
  else{
    alert("where's the track? Add more tracks!")
  }
})

// player buttons to move car
document.addEventListener('keyup', advancePlayer, false);
  function advancePlayer(event) {
    if (event.keyCode === 81) {
      currentPosition1 = document.querySelector("#player1_strip td.active");
      nextPosition1 = currentPosition1.nextElementSibling;
      if (nextPosition1 === null){
        alert("Player 1 Wins");
        restart = document.querySelector("div.twelve.columns.restart");
        restart.classList.add("again");
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
        restart = document.querySelector("div.twelve.columns.restart");
        restart.classList.add("again");
      }
      else {
      currentPosition2.classList.remove("active");
      nextPosition2.classList.add("active");
      }
    }
    if (event.keyCode === 90){
      currentPosition2 = document.querySelector("#player3_strip td.active");
      nextPosition2 = currentPosition2.nextElementSibling;
      if (nextPosition2 === null){
        alert("Player 3 Wins");
        restart = document.querySelector("div.twelve.columns.restart");
        restart.classList.add("again");
      }
      else {
      currentPosition2.classList.remove("active");
      nextPosition2.classList.add("active");
      }
    }
    if (event.keyCode === 191){
      currentPosition2 = document.querySelector("#player4_strip td.active");
      nextPosition2 = currentPosition2.nextElementSibling;
      if (nextPosition2 === null){
        alert("Player 4 Wins");
        restart = document.querySelector("div.twelve.columns.restart");
        restart.classList.add("again");
      }
      else {
      currentPosition2.classList.remove("active");
      nextPosition2.classList.add("active");
      }
    }
  };

// reset button
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
    start3 = document.querySelector("#player3_strip td.start");
    start3.classList.add("active");
    start4 = document.querySelector("#player4_strip td.start");
    start4.classList.add("active");

    var removeGoAgain = document.getElementsByClassName("restart");
    removeGoAgain[0].classList.remove("again");
  }