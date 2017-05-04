var d;
var Position;
var modal;

function setup() {
	d = new Designer();
	var path = "../../../static/mySelf/image/TshirtDesigner/"
	d.font = loadFont('../../../static/mySelf/css/Caviar-Dreams-fontfacekit/web_fonts/caviardreams_regular_macroman/CaviarDreams-webfont.ttf');
	d.face = loadImage(path + "image/1-face.png");
	d.dos = loadImage(path + "image/1-dos.png");
	d.droite = loadImage(path + "image/1-droite.png");
	d.gauche = loadImage(path + "image/1-gauche.png");
	d.in = loadImage(path + "image/in.png");
	d.out = loadImage(path + "image/out.png");
	d.fond = d.face;
	console.log(d.fond);
	d.canvas = createCanvas(2 * windowHeight / 3, 2 * windowHeight / 3).position(windowWidth / 2 - 250, windowHeight / 2 - 200);
	console.log(document.getElementById("conteneur"));
	var canvasWidth = d.canvas.size().width;
	var canvasHeight = d.canvas.size().height;
	var index = 0;
	document.getElementById("conteneur").height = 500 + canvasHeight;
	document.getElementById("conteneur").clientHeight = 500 + canvasHeight;
	document.getElementById("conteneur").insertBefore(d.canvas.elt, document.getElementById('buttonNb'));
	// on initialise tout ce qu'il faut dans le designer
	d.ctx = d.canvas.elt.getContext("2d");
	d.canvasOffset = d.canvas.position();
	d.offsetX = d.canvasOffset.x;
	d.offsetY = d.canvasOffset.y;
	// on ajoute dans le designer les éléments du DOM
	d.textareas.push(new p5.Element(document.getElementById("first")));
	d.buttons.push(new p5.Element(document.getElementById('buttonNb')));
	d.buttons.push(new p5.Element(document.getElementById('buttonProduit')));
	d.buttons.push(new p5.Element(document.getElementById('buttonDesign')));
	d.buttons.push(new p5.Element(document.getElementById('buttonImage')));
	d.buttons.push(new p5.Element(document.getElementById('buttonText')));
	d.buttons.push(new p5.Element(document.getElementById('face')));
	d.buttons.push(new p5.Element(document.getElementById('dos')));
	d.buttons.push(new p5.Element(document.getElementById('droite')));
	d.buttons.push(new p5.Element(document.getElementById('gauche')));
	d.buttons.push(new p5.Element(document.getElementById('choixDesign')));
	d.buttons.push(new p5.Element(document.getElementById('choixParametreDesign')));
	d.buttons.push(new p5.Element(document.getElementById('choixTexte')));
	d.buttons.push(new p5.Element(document.getElementById('choixParametreTexte')));
	d.buttons.push(new p5.Element(document.getElementById('ajoutText')));
	d.textarea('first').size(300, 35).value('Ajoutez du texte sur votre CUSTOM !');
	// gestion des evenements
	d.canvas.drop(gotfile);
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
	d.button('ajoutText').mousePressed(function() {
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
	d.button('buttonDesign').mousePressed(function() {
		modal('modalDesign');
	});
	d.button('buttonText').mousePressed(function() {
		modal('modalTexte');
	});
	d.button('buttonProduit').mousePressed(function() {
		modal('modalProduit');
	});
	d.button('buttonNb').mousePressed(function() {
		modal('modalNb');
	});
	d.button('choixDesign').mousePressed(function() {
		document.getElementById('choisiDesign').style.display = "block";
		document.getElementById('choisiParametreDesign').style.display = "none";
	});
	d.button('choixParametreDesign').mousePressed(function() {
		document.getElementById('choisiDesign').style.display = "none";
		document.getElementById('choisiParametreDesign').style.display = "block";
	});
	d.button('choixTexte').mousePressed(function() {
		document.getElementById('choisiTexte').style.display = "block";
		document.getElementById('choisiParametreTexte').style.display = "none";
	});
	d.button('choixParametreTexte').mousePressed(function() {
		document.getElementById('choisiTexte').style.display = "none";
		document.getElementById('choisiParametreTexte').style.display = "block";
	});
	for (var i = 0; i < document.getElementsByClassName('close').length; i++) {
		document.getElementsByClassName('close')[i].onclick = function() {
			modal();
		}
	}
	modal = function(id) {
			// on utilise la fonction soit pour fermer toutes les modales
			// soit pour un afficher une
			document.getElementById('modalProduit').style.display = "none";
			document.getElementById('modalDesign').style.display = "none";
			document.getElementById('modalTexte').style.display = "none";
			document.getElementById('modalNb').style.display = "none";
			if (id) {
				document.getElementById(id).style.display = "block";
			}
		}
		//on gère tous le positionnement ici :
	Position = function() {
		d.canvas.position(windowWidth / 2 - 250, windowHeight / 2 - 200);
		d.button('buttonProduit').position(d.offsetX - d.button('buttonProduit').width - 25, d.offsetY);
		d.button('buttonDesign').position(d.offsetX - d.button('buttonDesign').width - 25, d.offsetY + canvasHeight / 5);
		d.button('buttonImage').position(d.offsetX - d.button('buttonImage').width - 25, d.offsetY + 2 * canvasHeight / 5);
		d.button('buttonText').position(d.offsetX - d.button('buttonText').width - 25, d.offsetY + 3 * canvasHeight / 5);
		d.button('buttonNb').position(d.offsetX - d.button('buttonNb').width - 25, d.offsetY + 4 * canvasHeight / 5);
		d.button('face').position(d.offsetX + 30, d.offsetY + canvasHeight + 20);
		d.button('dos').position(d.offsetX + 30 + canvasWidth / 4, d.offsetY + canvasHeight + 20);
		d.button('droite').position(d.offsetX + 30 + 2 * canvasWidth / 4, d.offsetY + canvasHeight + 20);
		d.button('gauche').position(d.offsetX + 30 + 3 * canvasWidth / 4, d.offsetY + canvasHeight + 20);
		for (var i = 0; i < document.getElementsByClassName('modal-right').length; i++) {
			document.getElementsByClassName('modal-right')[i].style.paddingLeft = (d.offsetX + canvasWidth + 25).toString() + "px";
			document.getElementsByClassName('modal-right')[i].style.paddingTop = (d.offsetY - 120).toString() + 'px';
		}
	}
	Position();
}

function draw() {
	var canvasWidth = d.canvas.size().width;
	d.canvasOffset = d.canvas.position();
	d.offsetX = d.canvasOffset.x;
	d.offsetY = d.canvasOffset.y;
	for (var i = 0; i < d.sliders.length; i++) {
		d.sliders[i].position(d.sliders[i].x, d.sliders[i].y);
	}
	Position();
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
	if (!d.droped && d.textarea('first').value() == 'Ajoutez du texte sur votre CUSTOM !') {
		textSize(32);
		text('drag an image !', width / 2, height / 2);
	}
	translate(width / 2, height / 2);
	if (d.textarea('first').value() != 'Ajoutez du texte sur votre CUSTOM !') {
		push();
		fill(d.textColor[0], d.textColor[1], d.textColor[2]);
		//textSize(document.getElementById('tailleTexte'));
		d.text = text(d.textarea('first').value(), d.textX - width / 2, d.textY - height / 2, d.textWidth, d.textHeight);
		if (d.hitText(d.startX, d.startY)) {
			d.drawDragging(d.textX - width / 2, d.textY - height / 2, d.textRight - width / 2, d.textBottom - height / 2, d.textWidth);
		} else {
			d.xtext = cos(document.getElementById('orientationTexte').value * 0.017453292519943);
			d.ytext = sin(document.getElementById('orientationTexte').value * 0.017453292519943);
			d.atext = atan2(d.ytext, d.xtext);
		}
		pop();
	}
	if (d.droped && d.logo[d.nb]) {
		push();
		rotate(d.aImage);
		d.ctx.drawImage(d.logo[d.nb], 0, 0, d.logo[d.nb].width, d.logo[d.nb].height, d.imageX - width / 2, d.imageY - height / 2, d.imageWidth, d.imageHeight);
		if (d.hitImage(d.startX, d.startY)) {
			d.drawDragging(d.imageX - width / 2, d.imageY - height / 2, d.imageRight - width / 2, d.imageBottom - height / 2, d.imageWidth);
		} else {
			d.xImage = cos(document.getElementById('orientationImage').value * 0.017453292519943);
			d.yImage = sin(document.getElementById('orientationImage').value * 0.017453292519943);
			d.aImage = atan2(d.yImage, d.xImage);
		}
		pop();
	}
}