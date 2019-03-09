$(document).ready(function() {
	
	var width = $(window).width();
	var height = $(window).height();
	var botBarPos = height - 50;
	var boxVert = height/2-25;
	var boxHori = width/2-25;

	alert(width + ", " + height)

	$("body").css("maxWidth", width)
	$("body").css("maxHeight", height)

	$("#bottomStripe").css("top", botBarPos)

	$("#movingBox").css("top", boxVert)
	$("#movingBox").css("left", boxHori)

});

var backG 	= document.querySelector('#background')
var box 	= document.querySelector('#movingBox')

function handleOrientation(event) {
  var beta     = event.beta;
  var gamma    = event.gamma;

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  45) { x =  45};
  if (x < -45) { x = -45};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  x += 45;
  y += 45;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  box.style.top  = (maxX*x/90 - 25) + "px";
  box.style.left = (maxY*y/90 - 25) + "px";

}

window.addEventListener("deviceorientation", handleOrientation, true);
