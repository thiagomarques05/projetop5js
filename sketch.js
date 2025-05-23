let h = 5
let g = 255 - h
let b = 255 - h
let playerx = 300
let playery = 200
let treex = 100;
let treeY = 100;
let playermvsp = 2
  
function setup() 
{
  createCanvas(600, 400);
  treex = random(400);
  treey = int(treex);
  treex = random(400);
  treey = int(treey);
}

function draw()
{
  h += 0.35
  g = 255 - h
  b = 255 - h
  background(255, g, b)
  
  //texto de teste
  text("velocidade: " + round(playermvsp), 15, 25);
  text(round(h),15, 40);
  
  //correr
  if (keyIsDown(SHIFT) === true) 
  {
    if (playermvsp < 4)
      playermvsp += 0.085
  }
  else
      playermvsp = 2

  //movimento
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
  
  yys = 1 * - h
  
  rect(width / 2 + 265, height / 2 - 125, 25, 255);
  
  fill(h, 255 - h, 255 - h)
  rect(width / 2 + 265, height / 2 + 130, 25, yys);
  fill(255, 255, 255)
  
  square(treex, treey, 15);
  
  circle(playerx, playery, 25);
  
  
  let distancia;
  distancia = dist(playerx, playery, treex, treey);
  
  if (distancia <= 20)
  {
    h -= 23
    treex = random(350)
    treey = int(treex);
    treex = random(550)
    treey = int(treey);
  }
  
  //codigo de morte
  if (h >= 254) 
  {
        background(0, 0, 0)
        textSize(25);
        textAlign(CENTER);
        fill(255, 255, 255);
        text("Você Morreu!", width / 2, height / 2);
        noLoop();
  }
  
  //codigo de vitória
  if (h < 2) 
  {
        background(255, 255, 255)
        textSize(25);
        textAlign(CENTER);
        fill(0, 0, 0);
        text("Você Venceu!", width / 2, height / 2);
        noLoop();
    }
}