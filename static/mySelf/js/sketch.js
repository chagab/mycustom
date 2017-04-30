var cols, rows;
var scl = 20;
var w = screen.width;
var h = screen.height;
var flying = 0;
var terrain;

function setup() {
	console.log(screen.width);
	createCanvas(windowWidth, windowHeight, WEBGL);
	cols = w / scl;
	rows = h / scl;
	terrain = [];
	for (var x = 0; x < cols; x++) {
		terrain[x] = [];
	}
}

function draw() {
	flying -= 0.01;
	var yoff = flying;
	for (var y = 0; y < rows; y++) {
		var xoff = 0;
		for (var x = 0; x < cols; x++) {
			terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
			xoff += 0.2;
		}
		yoff += 0.2;
	}
	//rgb(26,39,118)
	background(255);
	pointLight(255, 255, 255, 0, 0, 0);
	translate(0, 50);
	rotateX(-PI / 3);
	translate(-w / 2, -h / 2);
	for (var y = 0; y < rows - 1; y++) {
		for (var x = 0; x < cols; x++) {
			push();
			translate(x * scl, y * scl, terrain[x][y]);
			box(scl / 2);
			pop();
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}