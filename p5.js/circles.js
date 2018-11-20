function setup() { 
  createCanvas(800, 400);
	rectMode(CENTER);
} 

function draw() { 
  background(220);
		
	//Top left quarter circle
	
	fill(255,255,0); //yellow
	ellipse(1, 25, 300, 300);
	
	fill(153,50,204);//purple
	ellipse(1, 25, 200, 200);
	
	fill(255,255,0); //yellow
	ellipse(1, 25, 100, 100);

	ellipse(1, 100, 10, 10);
	ellipse(30, 93, 10, 10);
	ellipse(60, 70, 10, 10);
	ellipse(74, 42, 10, 10);
	ellipse(74, 13, 10, 10);
	
	
	//Middle Circle
	
	ellipse(400, 200, 150, 150);
	
	fill(153,50,204);//purple
	ellipse(400, 200, 100, 100);
	
	fill(255,255,0); //yellow
	ellipse(400, 200, 50, 50);
	
	fill(153,50,204);//purple
	ellipse(400, 200, 20, 20);
	
}
