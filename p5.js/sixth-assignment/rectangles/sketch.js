
function setup() { 
	createCanvas(2000, 2000);
	rectMode(CENTER);
} 

function draw() { 
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 100, 100);
  }
}
