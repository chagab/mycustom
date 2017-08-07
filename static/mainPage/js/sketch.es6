let cols, rows;
let scl = 20;
let w = screen.width;
let h = screen.height;
let flying = 0;
let terrain;

function setup() {
	console.log(screen.width);
	createCanvas(windowWidth, windowHeight, WEBGL);
	cols = w / scl;
	rows = h / scl;
	terrain = [];
	for (let x = 0; x < cols; x++) {
		terrain[x] = [];
	}
}

function draw() {
	flying -= 0.01;
	let yoff = flying;
	for (let y = 0; y < rows; y++) {
		let xoff = 0;
		for (let x = 0; x < cols; x++) {
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
	for (let y = 0; y < rows - 1; y++) {
		for (let x = 0; x < cols; x++) {
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
