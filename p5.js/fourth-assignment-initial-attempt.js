var count = 0;


function setup() {
  createCanvas(800, 401);
}

function draw() {
  background(220);
  
  var x = height + count;
  var y = width; 
  
  rect(x-400-200, 1, 200, 75);
  rect(x-350-300, 75, 200, 100);
  rect(x-400-200, 175, 200, 75);
  rect(x-250-400, 250, 200, 75);
  rect(x-300-300, 325, 200, 75);
  
 count = count + 1; 

}

	

console.log(count);
