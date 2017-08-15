let d;

function colorPicker_OnClick(color) {
	let f = document.createElement("div");
	f.style.color = color;
	document.body.appendChild(f);
	let rgbValue = window.getComputedStyle(f).color.split(", ");
	//delete f;
	d.text[d.ct].textColor[0] = Number(rgbValue[0].slice(4));
	d.text[d.ct].textColor[1] = Number(rgbValue[1]);
	d.text[d.ct].textColor[2] = Number(rgbValue[2].slice(0, rgbValue[2].length - 1));
}

function changeProdcut(number) {
	const path = "/media/achetez/produit/";
	d.face = loadImage(path + number + "-face.png");
	d.dos = loadImage(path + number + "-dos.png");
	d.droite = loadImage(path + number + "-droite.png");
	d.gauche = loadImage(path + number + "-gauche.png");
	d.button('face').style('background-image', "url('" + path + number + "-face.png')");
	d.button('dos').style('background-image', "url('" + path + number + "-dos.png')");
	d.button('droite').style('background-image', "url('" + path + number + "-droite.png')");
	d.button('gauche').style('background-image', "url('" + path + number + "-gauche.png')");
	d.fond = d.face;
}

function onFileSelected(event) {
	//var selectedFile = event.target.files[0];
	//var reader = new FileReader();
	//reader.onload = function(event) {
	let image = new Image();
	image.src = event.target.result;
	console.log(event.target);
	console.log(event.target.files);
	console.log(event.target.result);
	gotfile(image);
	//};
}

function gotfile(file) {
	console.log('droped');
	d.droped = true;
	if (d.ci == 0 && d.logo[d.ci].image.src == "") {
		d.logo.pop();
		d.logo[0] = new Logo(file, d);
	} else {
		d.logo.push(new Logo(file, d));
		d.ci++;
	}
	//on enregistre l'état du logo une première fois
	d.history.saveState();
	//mettre à jour les sliders et les inputs
	d.slider('largeurImage').value(d.logo[d.ci].width);
	d.slider('hauteurImage').value(d.logo[d.ci].height);
	d.input('largeurImageSetting').value(d.logo[d.ci].width);
	d.input('hauteurImageSetting').value(d.logo[d.ci].height);
}

function setup() {
	d = new Designer();
	//on ajoute une image vide en premier
	const path = "/media/achetez/produit/";
	d.font = loadFont('/static/font/Caviar-Dreams/web_fonts/caviardreams_regular_macroman/CaviarDreams-webfont.ttf');
	d.face = loadImage((path + document.getElementById("fond_id").innerHTML + "-face.png"));
	d.dos = loadImage((path + document.getElementById("fond_id").innerHTML + "-dos.png"));
	d.droite = loadImage((path + document.getElementById("fond_id").innerHTML + "-droite.png"));
	d.gauche = loadImage((path + document.getElementById("fond_id").innerHTML + "-gauche.png"));
	d.fond = d.face;
	//taille minimale de la page
	document.getElementById("conteneur").style.height = windowHeight + 300 + "px";
	//pour cmd+Z ou ctrl+z suivant les os
	if (navigator.appVersion.indexOf("Win") != -1) d.OSName = "Windows";
	if (navigator.appVersion.indexOf("Mac") != -1) d.OSName = "MacOS";
	if (navigator.appVersion.indexOf("X11") != -1) d.OSName = "UNIX";
	if (navigator.appVersion.indexOf("Linux") != -1) d.OSName = "Linux";
	d.canvas = createCanvas(4 * windowHeight / 5, 4 * windowHeight / 5);
	const canvasWidth = d.canvas.size().width;
	const canvasHeight = d.canvas.size().height;
	// on initialise tout ce qu'il faut dans le designer
	d.ctx = d.canvas.elt.getContext("2d");
	d.canvasOffset = d.canvas.position();
	d.offsetX = d.canvasOffset.x;
	d.offsetY = d.canvasOffset.y;
	//on met un logo vide dans le tableau de logo pour que la compilation fonctionne et on le place dans le carré pour qu'il
	//ne soit pas rouge
	d.logo.push(new Logo("", d));
	d.logo[0].ratio = 1;
	d.logo[0].x = width / 2;
	d.logo[0].y = height / 2;
	d.logo[0].width = 25;
	d.logo[0].height = 25;
	d.logo[0].right = d.logo[0].x + d.logo[0].width;
	d.logo[0].bottom = d.logo[0].y + d.logo[0].height;
	d.text.push(new Text(d));
	///////////////////////////////////////////////////
	// on ajoute dans le designer les éléments du DOM//
	///////////////////////////////////////////////////
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
	d.buttons.push(new p5.Element(document.getElementById('choixCouleurDesign')));
	d.buttons.push(new p5.Element(document.getElementById('choixTexte')));
	d.buttons.push(new p5.Element(document.getElementById('choixParametreTexte')));
	d.buttons.push(new p5.Element(document.getElementById('choixCouleurTexte')));
	d.buttons.push(new p5.Element(document.getElementById('ajoutText')));
	d.sliders.push(new p5.Element(document.getElementById('tailleTexte')));
	d.sliders.push(new p5.Element(document.getElementById('orientationTexte')));
	d.sliders.push(new p5.Element(document.getElementById('xTexte')));
	d.sliders.push(new p5.Element(document.getElementById('yTexte')));
	d.sliders.push(new p5.Element(document.getElementById('tailleImage')));
	d.sliders.push(new p5.Element(document.getElementById('orientationImage')));
	d.sliders.push(new p5.Element(document.getElementById('xImage')));
	d.sliders.push(new p5.Element(document.getElementById('yImage')));
	d.sliders.push(new p5.Element(document.getElementById('largeurImage')));
	d.sliders.push(new p5.Element(document.getElementById('hauteurImage')));
	d.sliders.push(new p5.Element(document.getElementById('largeurTexte')));
	d.sliders.push(new p5.Element(document.getElementById('hauteurTexte')));
	d.inputs.push(new p5.Element(document.getElementById('xImageSetting')));
	d.inputs.push(new p5.Element(document.getElementById('yImageSetting')));
	d.inputs.push(new p5.Element(document.getElementById('largeurImageSetting')));
	d.inputs.push(new p5.Element(document.getElementById('hauteurImageSetting')));
	d.inputs.push(new p5.Element(document.getElementById('xTexteSetting')));
	d.inputs.push(new p5.Element(document.getElementById('yTexteSetting')));
	d.inputs.push(new p5.Element(document.getElementById('largeurTexteSetting')));
	d.inputs.push(new p5.Element(document.getElementById('hauteurTexteSetting')));
	d.inputs.push(new p5.Element(document.getElementById('ratio')));
	d.inputs.push(new p5.Element(document.getElementById('quadrillage')));
	d.inputs.push(new p5.Element(document.getElementById('quadrillageTexte')));
	d.textarea('first').size(300, 35).value('Ajoutez du texte sur votre CUSTOM !');
	d.Position();
	///////////////////////////
	// gestion des evenements//
	///////////////////////////
	d.canvas.drop(gotfile);
	d.canvas.mousePressed(function(e) {
		d.startX = mouseX;
		d.startY = mouseY;
		d.logo.forEach(function(e) {
			e.draggingResizer = e.anchorHitTestImage(d.startX, d.startY);
			e.draggingImage = e.draggingResizer < 0 && e.hitImage(d.startX, d.startY);
		});
		d.text.forEach(function(e) {
			e.draggingResizerText = e.anchorHitTestText(d.startX, d.startY);
			e.draggingText = e.draggingResizerText < 0 && d.text[d.ct].hitText(d.startX, d.startY);
		});
	});
	d.canvas.mouseMoved(function(e) {
		d.outOfCanvas = false;
		d.logo[d.ci].dragg(e);
		d.text[d.ct].dragg(e);
		//on actualise les sliders pour les logos
		d.slider('xImage').value(d.logo[d.ci].x);
		d.slider('yImage').value(d.logo[d.ci].y);
		d.slider('largeurImage').value(d.logo[d.ci].width);
		d.slider('hauteurImage').value(d.logo[d.ci].height);
		//on actualise les sliders pour les texte
		d.slider('xTexte').value(d.text[d.ct].x);
		d.slider('yTexte').value(d.text[d.ct].y);
		d.slider('largeurTexte').value(d.text[d.ct].width);
		d.slider('hauteurTexte').value(d.text[d.ct].height);
	});
	d.canvas.elt.addEventListener('mouseup', function(e) {
		d.logo[d.ci].draggingResizer = -1;
		d.logo[d.ci].draggingImage = false;
		d.text[d.ct].draggingResizerText = -1;
		d.text[d.ct].draggingText = false;
	});
	d.canvas.mouseOut(function(e) {
		d.logo[d.ci].draggingResizer = -1;
		d.logo[d.ci].draggingImage = false;
		d.text[d.ct].draggingResizerText = -1;
		d.text[d.ct].draggingText = false;
		d.outOfCanvas = true;
		d.history.saveState();
	});
	d.button('ajoutText').mousePressed(function() {
		if (d.textarea('first').value() == 'Ajoutez du texte sur votre CUSTOM !') {
			d.textarea('first').value('');
			d.textarea('first').elt.focus();
		} else {
			d.textareas.push(createElement('textarea').id('textarea' + d.ct));
			d.textarea('first').parent().appendChild(d.textarea('textarea' + d.ct).elt);
		}
		if (d.ct < 9) d.ct++;
		else d.ct = 9;
		d.text.push(new Text(d));
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
		d.modal('modalDesign');
	});
	d.button('buttonText').mousePressed(function() {
		d.modal('modalTexte');
	});
	d.button('buttonProduit').mousePressed(function() {
		d.modal('modalProduit');
	});
	d.button('buttonNb').mousePressed(function() {
		d.modal('modalNb');
	});
	d.button('choixDesign').mousePressed(function() {
		document.getElementById('choisiDesign').style.display = "block";
		document.getElementById('choisiParametreDesign').style.display = "none";
		document.getElementById('choisiCouleurDesign').style.display = "none";
	});
	d.button('choixParametreDesign').mousePressed(function() {
		document.getElementById('choisiDesign').style.display = "none";
		document.getElementById('choisiParametreDesign').style.display = "block";
		document.getElementById('choisiCouleurDesign').style.display = "none";
	});
	d.button('choixCouleurDesign').mousePressed(function() {
		document.getElementById('choisiDesign').style.display = "none";
		document.getElementById('choisiParametreDesign').style.display = "none";
		document.getElementById('choisiCouleurDesign').style.display = "block";
	});
	d.button('choixTexte').mousePressed(function() {
		document.getElementById('choisiTexte').style.display = "block";
		document.getElementById('choisiParametreTexte').style.display = "none";
		document.getElementById('choisiCouleurTexte').style.display = "none";
	});
	d.button('choixParametreTexte').mousePressed(function() {
		document.getElementById('choisiTexte').style.display = "none";
		document.getElementById('choisiParametreTexte').style.display = "block";
		document.getElementById('choisiCouleurTexte').style.display = "none";
	});
	d.button('choixCouleurTexte').mousePressed(function() {
		document.getElementById('choisiTexte').style.display = "none";
		document.getElementById('choisiParametreTexte').style.display = "none";
		document.getElementById('choisiCouleurTexte').style.display = "block";
	});
	const close = document.getElementsByClassName('close');
	for (let i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			d.modal();
		}
	};
	d.slider('xImage').elt.onchange = function() {
		d.history.saveState();
	}
	d.slider('yImage').elt.onchange = function() {
		d.history.saveState();
	}
	d.slider('largeurImage').elt.onchange = function() {
		d.history.saveState();
	}
	d.slider('hauteurImage').elt.onchange = function() {
		d.history.saveState();
	}
	d.slider('xTexte').elt.onchange = function() {
		d.history.saveState();
	}
	d.slider('yTexte').elt.onchange = function() {
		d.history.saveState();
	}
	d.slider('largeurTexte').elt.onchange = function() {
		d.history.saveState();
	}
	d.slider('hauteurTexte').elt.onchange = function() {
		d.history.saveState();
	}
	d.input('xImageSetting').elt.onchange = function() {
		d.slider('xImage').value(this.value);
		d.logo[d.ci].x = this.value;
		d.history.saveState();
	};
	d.input('yImageSetting').elt.onchange = function() {
		d.slider('yImage').value(this.value);
		d.logo[d.ci].y = this.value;
		d.history.saveState();
	}
	d.input('largeurImageSetting').elt.onchange = function() {
		d.slider('largeurImage').value(this.value);
		d.logo[d.ci].width = this.value;
		d.logo[d.ci].right = d.logo[d.ci].x + d.logo[d.ci].width;
		d.history.saveState();
	}
	d.input('hauteurImageSetting').elt.onchange = function() {
		d.slider('hauteurImage').value(this.value);
		d.logo[d.ci].height = this.value;
		d.logo[d.ci].bottom = d.logo[d.ci].y + d.logo[d.ci].height;
		d.history.saveState();
	}
	d.input('xTexteSetting').elt.onchange = function() {
		d.slider('xTexte').value(this.value);
		d.text[d.ct].x = this.value;
		d.history.saveState();
	}
	d.input('yTexteSetting').elt.onchange = function() {
		d.slider('yTexte').value(this.value);
		d.text[d.ct].y = this.value;
		d.history.saveState();
	}
	d.input('largeurTexteSetting').elt.onchange = function() {
		d.slider('largeurTexte').value(this.value);
		d.text[d.ct].width = this.value;
		d.text[d.ct].right = d.text[d.ct].x + d.text[d.ct].width;
		d.history.saveState();
	}
	d.input('hauteurTexteSetting').elt.onchange = function() {
		d.slider('hauteurTexte').value(this.value);
		d.text[d.ct].height = this.value;
		d.text[d.ct].bottom = d.text[d.ct].y + d.text[d.ct].height;
		d.history.saveState();
	}
	d.input('ratio').elt.onchange = function() {
		d.conserverRatio = this.checked;
	}
	d.textarea('first').elt.onfocus = function() {
		if (this.value == 'Ajoutez du texte sur votre CUSTOM !') {
			this.value = '';
		}
	}
	document.onkeydown = function(e) {
		////////////////////////////////////////
		//pour détecter les raccourcis clavier//
		////////////////////////////////////////
		const evtobj = window.event ? event : e;
		if (d.OSName == "Windows" || d.OSName == "Linux" || d.OSName == "UNIX") {
			if (evtobj.keyCode == 90 && evtobj.ctrlKey) {
				d.history.undo();
			}
			if (evtobj.keyCode == 90 && evtobj.ctrlKey && evtobj.shiftKey) {
				d.history.redo();
			}
		}
		if (d.OSName == "MacOS") {
			if (evtobj.keyCode == 90 && evtobj.metaKey && !evtobj.shiftKey) {
				d.history.undo();
			}
			if (evtobj.keyCode == 90 && evtobj.metaKey && evtobj.shiftKey) {
				d.history.redo();
			}
		}
		if (evtobj.keyCode == 8 && evtobj.shiftKey) {
			if (d.ci > 1) {
				d.ci--;
				d.logo.pop();
			}
		}
	};
}

function draw() {
	/////////////////////////////////////
	//initialisation à chaque itération//
	/////////////////////////////////////
	let inSquare;
	d.canvasOffset = d.canvas.position();
	d.offsetX = d.canvasOffset.x;
	d.offsetY = d.canvasOffset.y;
	d.Position();
	background(200);
	background(d.fond);
	textFont(d.font);
	textAlign(CENTER);
	translate(width / 2, height / 2);
	///////////////////////////////////////////////////////////////////////////////
	//s'il n'y a pas eu de modifications depuis le début du chargement de la page//
	///////////////////////////////////////////////////////////////////////////////
	if (!d.droped && d.textarea('first').value() == 'Ajoutez du texte sur votre CUSTOM !') {
		textSize(d.text[d.ct].fontSize);
		text('drop une image !', 0, 0);
	}
	////////////////////
	//gestion du texte//
	////////////////////
	if (d.textarea('first').value() != 'Ajoutez du texte sur votre CUSTOM !') {
		//pour tous les textes
		d.text.forEach(function(e) {
			push();
			rotate(e.aRot);
			fill(e.textColor[0], e.textColor[1], e.textColor[2]);
			textSize(e.fontSize);
			e.content = d.textareas[e.nb].value();
			e.width = Math.max.apply(null, escape(e.content).split('%0A').map(w => textWidth(w)));
			e.height = escape(e.content).split('%0A').length * e.fontSize * 1.2;
			e.right = e.x + e.width;
			e.bottom = e.y + e.height;
			text(e.content, e.x - width / 2, e.y - height / 2, e.width, e.height);
			if (e.hitText(d.startX, d.startY)) {
				e.drawDragging(e.x - width / 2, e.y - height / 2, e.right - width / 2, e.bottom - height / 2);
			}
			pop();
			push();
			textSize(15);
			if (e.draggingResizerText > -1) {
				text(Math.floor(e.width) + " x " + Math.floor(e.height), e.x - width / 2, e.y - 20 - height / 2);
			} else if (e.hitText(d.startX, d.startY) && e.content != 'Ajoutez du texte sur votre CUSTOM !') {
				text("(" + Math.floor(e.x) + " ," + Math.floor(e.y) + ")", e.x - width / 2, e.y - 20 - height / 2);
			}
			pop();
			inSquare |= (e.x < (width / 4 + 15) || e.right > (3 * width / 4 - 15) || e.y < (height / 4) || e.bottom > (0.85 * height));
		});
	}
	//////////////////////
	//gestion de l'image//
	//////////////////////
	if (d.droped) {
		//pour toutes les images
		d.logo.forEach(function(e) {
			push();
			rotate(e.aRot);
			d.ctx.drawImage(e.image, 0, 0, e.image.width, e.image.height, e.x - width / 2, e.y - height / 2, e.width, e.height);
			if (e.hitImage(d.startX, d.startY)) {
				e.drawDragging(e.x - width / 2, e.y - height / 2, e.right - width / 2, e.bottom - height / 2);
			}
			textSize(15);
			if (e.draggingResizer > -1) {
				text(Math.floor(e.width) + " x " + Math.floor(e.height), e.x - width / 2, e.y - 20 - height / 2);
			} else if (e.hitImage(d.startX, d.startY) && e.image.src != "") {
				text("(" + Math.floor(e.x) + " ," + Math.floor(e.y) + ")", e.x - width / 2, e.y - 20 - height / 2);
			}
			pop();
			if (d.logo[d.ci].src != '') {
				inSquare |= (e.x < (width / 4 + 15) || e.right > (3 * width / 4 - 15) || e.y < (height / 4) || e.bottom > (0.85 * height));
			}
		});
	}
	////////////////////////////////////////
	//gesetion des sliders "en temps réel"//
	////////////////////////////////////////
	if (d.outOfCanvas) {
		//on change la rotation de l'image
		d.logo[d.ci].xRot = cos(d.slider('orientationImage').value() * 0.017453292519943);
		d.logo[d.ci].yRot = sin(d.slider('orientationImage').value() * 0.017453292519943);
		d.logo[d.ci].aRot = atan2(d.logo[d.ci].yRot, d.logo[d.ci].xRot);
		//on change la position de l'image
		d.logo[d.ci].x = d.slider('xImage').value();
		d.logo[d.ci].y = d.slider('yImage').value();
		d.logo[d.ci].width = d.slider('largeurImage').value();
		d.logo[d.ci].height = d.slider('hauteurImage').value();
		//on actualise les contours
		d.logo[d.ci].right = d.logo[d.ci].x + d.logo[d.ci].width;
		d.logo[d.ci].bottom = d.logo[d.ci].y + d.logo[d.ci].height;
		//on change la rotation du texte
		d.text[d.ct].xRot = cos(d.slider('orientationTexte').value() * 0.017453292519943);
		d.text[d.ct].yRot = sin(d.slider('orientationTexte').value() * 0.017453292519943);
		d.text[d.ct].aRot = atan2(d.text[d.ct].yRot, d.text[d.ct].xRot);
		//on change la position de l'image
		d.text[d.ct].x = d.slider('xTexte').value();
		d.text[d.ct].y = d.slider('yTexte').value();
		d.text[d.ct].width = d.slider('largeurTexte').value();
		d.text[d.ct].height = d.slider('hauteurTexte').value();
		d.text[d.ct].fontSize = d.slider('tailleTexte').value();
		//on actualise les contours
		d.text[d.ct].right = d.text[d.ct].x + d.text[d.ct].width;
		d.text[d.ct].bottom = d.text[d.ct].y + d.text[d.ct].height;
	} else {
		d.sliders.forEach(function(e) {
			//console.log(e.elt.parentElement);
			e.elt.parentElement.nextElementSibling.firstChild.value = e.value();
		});
	}
	///////////////////////
	//gestion des flèches//
	///////////////////////
	if (keyIsDown(LEFT_ARROW)) {
		if (keyIsDown(ENTER)) {
			if (d.aImage < 360) d.aImage += 0.1;
			if (d.aImage >= 360) d.aImage = 360;
		} else {
			d.logo[d.ci].x -= 2;
			d.logo[d.ci].right -= 2;
		}
	}
	if (keyIsDown(RIGHT_ARROW)) {
		if (keyIsDown(ENTER)) {
			if (d.aImage > 0) d.aImage -= 0.1;
			if (d.aImage <= 0) d.aImage = 0;
		} else {
			d.logo[d.ci].x += 2;
			d.logo[d.ci].right += 2;
		}
	}
	if (keyIsDown(UP_ARROW)) {
		if (keyIsDown(ENTER)) {} else {
			d.logo[d.ci].y -= 2;
			d.logo[d.ci].bottom -= 2;
		}
	}
	if (keyIsDown(DOWN_ARROW)) {
		if (keyIsDown(ENTER)) {} else {
			d.logo[d.ci].y += 2;
			d.logo[d.ci].bottom += 2;
		}
	}
	///////////////////////////////////////////
	//délimitation de l'espace pour les logos//
	///////////////////////////////////////////
	if (inSquare) {
		stroke(255, 0, 0);
	} else {
		stroke(0, 0, 0);
	}
	fill(0, 0, 0, 0);
	rect(-width / 4 + 15, -height / 4, width / 2 - 30, height / 2 + 0.1 * height);
	if (d.input('quadrillage').elt.checked || d.input('quadrillageTexte').elt.checked) {
		push();
		stroke(0, 0, 0);
		strokeWeight(0.15);
		line(0, -height / 2, 0, height / 2);
		line(-width / 3, -height / 2, -width / 3, height / 2);
		line(width / 3, -height / 2, width / 3, height / 2);
		line(-width / 6, -height / 2, -width / 6, height / 2);
		line(width / 6, -height / 2, width / 6, height / 2);
		line(-width, height / 6, width, height / 6);
		line(-width, height / 3, width, height / 3);
		line(-width, -height / 3, width, -height / 3);
		line(-width, -height / 6, width, -height / 6);
		line(-width, 0, width, 0);
		pop();
	}
}
