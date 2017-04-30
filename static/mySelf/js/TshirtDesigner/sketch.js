var d;
var path;

function preload() { // preload() runs once
	d = new Designer();
	path = "../../static/mySelf/image/TshirtDesigner/image/";
	d.font = loadFont('../../static/mySelf/css/Caviar-Dreams-fontfacekit/web_fonts/caviardreams_regular_macroman/CaviarDreams-webfont.ttf');
	d.face = loadImage(path + "face.png");
	d.dos = loadImage(path + "dos.png");
	d.droite = loadImage(path + "droite.png");
	d.gauche = loadImage(path + "gauche.png");
	d.in = loadImage(path + "in.png");
	d.out = loadImage(path + "out.png");
}

function setup() {
	d.fond = d.face;
	d.canvas = createCanvas(500, 500).position(windowWidth / 2 - 500, windowHeight / 2 - 250);
	d.ctx = d.canvas.elt.getContext("2d");
	d.canvasOffset = d.canvas.position();
	d.offsetX = d.canvasOffset.x;
	d.offsetY = d.canvasOffset.y;
	var canvasWidth = d.canvas.size().width;
	var index = 0;
	// on remplit le designer de tous les éléments de DOM nécéssaires
	d.h1 = createElement('h1', 'MY CUSTOM').position(windowWidth / 2 - 100, 0);
	d.p.push(createP('customisez toutes vos créations sur MY CUSTOM').position(windowWidth / 2 - 180, d.h1.size().height + 30));
	d.p.push(createP('couleur texte').position(d.offsetX + canvasWidth + 280, d.offsetY + 50));
	d.buttons.push(createButton('Imprimer !'));
	d.buttons.push(createButton('importer votre logo'));
	d.buttons.push(createButton('choisir un logo'));
	d.buttons.push(createButton('face'));
	d.buttons.push(createButton('dos'));
	d.buttons.push(createButton('droite'));
	d.buttons.push(createButton('gauche'));
	d.sliders.push(new Slider('taille texte', 1, 200, 1, d.offsetX + canvasWidth + 50, d.offsetY));
	d.imgs.push(createImg(path + "in.png").position(d.offsetX + canvasWidth + 50, d.offsetY + 20).size(25, 25));
	d.textareas.push(createElement("textarea").position(d.offsetX + canvasWidth + 50, d.offsetY + 130).id('first'));
	d.inputs.push(document.getElementById('colorPicker'));
	console.log(d.inputs);
	console.log(d.input('colorPicker'));
	console.log(d.input('colorPicker').jscolor);
	// on ajuste la position ou le style des élements
	d.button('Imprimer !').position(canvasWidth + d.offsetX + 50, d.offsetY);
	d.button('importer votre logo').position(canvasWidth + d.offsetX + 150, d.offsetY);
	d.button('choisir un logo').position(canvasWidth + d.offsetX + 300, d.offsetY);
	d.button('face').position(d.offsetX - 80, d.offsetY).style('background-image', "url('../../static/mySelf/image/TshirtDesigner/image/face.png')");
	d.button('dos').position(d.offsetX - 80, d.offsetY + 100).style('background-image', "url('../../static/mySelf/image/TshirtDesigner/image/dos.png')");
	d.button('droite').position(d.offsetX - 80, d.offsetY + 200).style('background-image', "url('../../static/mySelf/image/TshirtDesigner/image/droite.png')");
	d.button('gauche').position(d.offsetX - 80, d.offsetY + 300).style('background-image', "url('../../static/mySelf/image/TshirtDesigner/image/gauche.png')");
	d.buttonStyle(d.button('face'));
	d.buttonStyle(d.button('dos'));
	d.buttonStyle(d.button('droite'));
	d.buttonStyle(d.button('gauche'));
	d.slider('taille texte').value(20);
	d.textarea('first').size(300, 35).value('add some text on your custom !');
	d.textarea('first').style('max-height', '35px').style('max-width', '300px');
	d.textarea('first').style('min-height', '35px').style('min-width', '300px');
	d.input('colorPicker').style.position = "absolute"
	d.input('colorPicker').style.left = d.offsetX + canvasWidth + 80 + 'px';
	d.input('colorPicker').style.top = d.offsetY + 50 + 'px';
	// gestion des evenements 
	d.canvas.drop(d.gotfile);
	d.canvas.mousePressed(function(e) {
		d.startX = parseInt(e.clientX - d.offsetX);
		d.startY = parseInt(e.clientY - d.offsetY);
		d.draggingResizer = d.anchorHitTestImage(d.startX, d.startY);
		d.draggingResizerText = d.anchorHitTestText(d.startX, d.startY);
		d.draggingImage = d.draggingResizer < 0 && d.hitImage(d.startX, d.startY);
		d.draggingText = d.draggingResizerText < 0 && d.hitText(d.startX, d.startY);
	});
	d.canvas.mouseMoved(function(e) {
		d.dragg(e);
	});
	d.canvas.elt.addEventListener('mouseup', function(e) {
		d.draggingResizer = -1;
		d.draggingResizerText = -1;
		d.draggingImage = false;
		d.draggingText = false;
	});
	d.canvas.mouseOut(function(e) {
		d.draggingResizer = -1;
		d.draggingResizerText = -1;
		d.draggingImage = false;
		d.draggingText = false;
	});
	d.canvas.elt.addEventListener("dblclick", function() {
		if (index == 0) {
			d.textarea('first').value('');
			d.textarea('first').elt.focus();
		} else {
			d.textareas.push(createElement("textarea").id('area' + index));
			d.textarea('area' + index).position(d.offsetX + canvasWidth + 50, d.offsetY + 130 + index * 40);
			d.textarea('area' + index).size(300, 35).value('');
			d.textarea('area' + index).style('max-height', '35px').style('max-width', '300px');
			d.textarea('area' + index).style('min-height', '35px').style('min-width', '300px');
			d.textarea('area' + index).elt.focus();
		}
		if (index < 9) index++;
		else index = 9;
	});
	d.button('face').mousePressed(function() {
		d.fond = d.face;
	});
	d.button('dos').mousePressed(function() {
		d.fond = d.dos;
	});
	d.button('droite').mousePressed(function() {
		d.fond = d.droite;
	});
	d.button('gauche').mousePressed(function() {
		d.fond = d.gauche;
	});
}

function draw() {
	background(200);
	background(d.fond);
	textFont(d.font);
	textAlign(CENTER);
	if (keyIsDown(LEFT_ARROW)) {
		if (keyIsDown(ENTER)) {
			if (d.aImage < 360) d.aImage += 0.1;
			if (d.aImage >= 360) d.aImage = 360;
		} else {
			d.imageX -= 2;
			d.imageRight -= 2;
		}
	}
	if (keyIsDown(RIGHT_ARROW)) {
		if (keyIsDown(ENTER)) {
			if (d.aImage > 0) d.aImage -= 0.1;
			if (d.aImage <= 0) d.aImage = 0;
		} else {
			d.imageX += 2;
			d.imageRight += 2;
		}
	}
	if (keyIsDown(UP_ARROW)) {
		if (keyIsDown(ENTER)) {} else {
			d.imageY -= 2;
			d.imageBottom -= 2;
		}
	}
	if (keyIsDown(DOWN_ARROW)) {
		if (keyIsDown(ENTER)) {} else {
			d.imageY += 2;
			d.imageBottom += 2;
		}
	}
	if (d.droped && d.logo[d.nb]) {
		push();
		rotate(d.aImage);
		d.ctx.drawImage(d.logo[d.nb], 0, 0, d.logo[d.nb].width, d.logo[d.nb].height, d.imageX, d.imageY, d.imageWidth, d.imageHeight);
		if (d.hitImage(d.startX, d.startY)) {
			d.drawDragging(d.imageX, d.imageY, d.imageRight, d.imageBottom, d.imageWidth);
		}
		pop();
	}
	if (d.textarea('first').value() != 'add some text on your custom !') {
		push();
		fill(d.input('colorPicker').jscolor.rgb[0], d.input('colorPicker').jscolor.rgb[1], d.input('colorPicker').jscolor.rgb[2]);
		textSize(d.slider('taille texte').value());
		d.text = text(d.textarea('first').value(), d.textX, d.textY, d.textWidth, d.textHeight);
		if (d.hitText(d.startX, d.startY)) {
			d.drawDragging(d.textX, d.textY, d.textRight, d.textBottom, d.textWidth);
		}
		pop();
	}
	if (!d.droped && d.textarea('first').value() == 'add some text on your custom !') {
		textSize(32);
		text('drag an image !', width / 2, height / 2);
	}
	for (var i = 0; i < d.sliders.length; i++) {
		d.sliders[i].show();
	}
}

function windowResized() {
	// on update les positions des éléments ...
	var canvasWidth = d.canvas.size().width;
	d.canvasOffset = d.canvas.position();
	d.offsetX = d.canvasOffset.x;
	d.offsetY = d.canvasOffset.y;
	// .. et on repositionne tous en fonctions des modfications
	d.h1.position(windowWidth / 2 - 100, 0);
	d.p[0].position(windowWidth / 2 - 180, 40);
	d.button('Imprimer !').position(canvasWidth + d.offsetX + 50, d.offsetY);
	d.button('importer votre logo').position(canvasWidth + d.offsetX + 150, d.offsetY);
	d.button('choisir un logo').position(canvasWidth + d.offsetX + 300, d.offsetY);
	d.button('face').position(d.offsetX - 80, d.offsetY);
	d.button('dos').position(d.offsetX - 80, d.offsetY + 100);
	d.button('droite').position(d.offsetX - 80, d.offsetY + 200);
	d.button('gauche').position(d.offsetX - 80, d.offsetY + 300);
	for (var i = 0; i < d.sliders.length; i++) {
		d.sliders[i].position(d.offsetX + canvasWidth, d.offsetY);
	}
}