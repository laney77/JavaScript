function setup() {
	createCanvas(800, 400);
}

function draw() {
	background(220);
	
	var radius = 300;
	var multiplierDifference = 0.2;
	
	// circle 01
	fill(51, 51, 51);
	strokeWeight(2);
	stroke(75);
	ellipse(400, 200, radius, radius);
	// circle 02
	stroke(0);
	fill(255, 53, 139);
	ellipse(400, 200, radius*(1-multiplierDifference), radius*(1-multiplierDifference));
	// circle 03
	fill(1, 176, 240);
	ellipse(400, 200, radius*(1-multiplierDifference*2), radius*(1-multiplierDifference*2));
	// circle 04
	fill(174, 238, 0);
	ellipse(400, 200, radius*(1-multiplierDifference*3), radius*(1-multiplierDifference*3));
}
