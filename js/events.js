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

var addTracks = document.getElementById("longerTrack");
var lengthTrack = document.querySelectorAll("#player1_strip td");
addTracks.addEventListener("click", function(){
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
// set track length

