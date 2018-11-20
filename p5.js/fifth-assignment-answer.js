var canvasXSize = 800; 

function setup() { 
  createCanvas(canvasXSize, 400);
	rectMode(CENTER);
} 

function draw() { 
  background(220);
	
	var sizeX = 200;
	var sizeY = 100;
	var initialPosition = sizeX * -1;
	var finalPosition;
	
	var x1 = initialPosition + frameCount * 1.6
	var x2 = initialPosition + frameCount * 1.2;
	var x3 = initialPosition + frameCount * 1.4;
	var x4 = initialPosition + frameCount * 1.3;
	var x5 = initialPosition + frameCount * 1.7;
	
	var outOfScreenPosition = canvasXSize - sizeX/2;
	
	if (x1 >= outOfScreenPosition) {
		x1 = outOfScreenPosition;
	}
	if (x2 >= outOfScreenPosition) {
		x2 = outOfScreenPosition;
	}
	if (x3 >= outOfScreenPosition) {
		x3 = outOfScreenPosition;
	}
	if (x4 >= outOfScreenPosition) {
		x4 = outOfScreenPosition;
	}
	if (x5 >= outOfScreenPosition) {
		x5 = outOfScreenPosition;
	}
	
	
	rect(x1, 0, sizeX, sizeY);
	rect(x2, 100, sizeX, sizeY);
	rect(x3, 200, sizeX, sizeY);
	rect(x4, 300, sizeX, sizeY);
	rect(x5, 400, sizeX, sizeY);
}
