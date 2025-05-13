let h = 0.1
let g = 255 - h
let b = 255 - h
let playerx = 300
let playery = 200
let playermvsp = 2
  
function setup() {
  createCanvas(600, 400);
}

function draw()
{
  h += 0.25
  g = 255 - h
  b = 255 - h
  background(255, g, b)
  
  
  text("velocidade: " + round(playermvsp), 15, 25);
  if (keyIsDown(SHIFT) === true) 
  {
    if (playermvsp < 4)
      playermvsp += 0.085
  }
  else
      playermvsp = 2

  
  if (keyIsDown(LEFT_ARROW) === true) 
  {
    playerx -= playermvsp;
  }
  
  if (keyIsDown(RIGHT_ARROW) === true) 
  {
    playerx += playermvsp;
  }
  if (keyIsDown(DOWN_ARROW) === true) 
  {
    playery += playermvsp;
  }
  
  if (keyIsDown(UP_ARROW) === true) 
  {
    playery -= playermvsp;
  }
  
circle(playerx, playery, 25);
  
  
  
  
  
}