function Designer() {
	this.canvas;
	this.ctx;
	this.canvasOffset;
	this.droped = false;
	// varialbe pour la police
	this.font;
	// variables pour afficher le textil
	this.fond;
	this.dos;
	this.gauche;
	this.droite;
	this.face;
	this.Y_AXIS = 1;
	this.X_AXIS = 2;
	// variables pour les dragg (commun au deux types de dragg)
	this.offsetX;
	this.offsetY;
	this.startX;
	this.startY;
	// variables pour le dragg d'images
	this.outOfCanvas = false;
	this.conserverRatio = true;
	//variables pour les rotations du text
	this.xText = 0;
	this.yText = 0;
	this.aText = 0;
	//variables pour détecter l'OS (pour les différents raccourcis clavier)
	this.OSName = "Unknown OS";
	//variable contenant l'index de l'image courante
	this.ci = 0;
	//variable contenant l'index du texte courant
	this.ct = 0;
	//variables contenant tous les élements sur le canvas
	this.logo = [];
	this.text = [];
	// variables contenant les éléments du DOM
	this.buttons = [];
	this.textareas = [];
	this.sliders = [];
	this.inputs = [];
	// on ajoute des méthodes pour pouvoir retrouver les éléments du DOM facilement
	this.textarea = function(titre) {
		return this.textareas.find(element => element.elt.id == titre);
	};
	this.button = function(titre) {
		return this.buttons.find(function(element) {
			return element.elt.id === titre;
		});
	}
	this.slider = function(titre) {
		return this.sliders.find(function(element) {
			return element.elt.id === titre;
		});
	}
	this.input = function(titre) {
		return this.inputs.find(function(element) {
			return element.elt.id === titre;
		});
	}
	this.setGradient = function(x, y, w, h, c1, c2, axis) {
		noFill();
		if (axis == this.Y_AXIS) { // Top to bottom gradient
			for (var i = y; i <= y + h; i++) {
				var inter = map(i, y, y + h, 0, 1);
				var c = lerpColor(c1, c2, inter);
				stroke(c);
				line(x, i, x + w, i);
			}
		} else if (axis == this.X_AXIS) { // Left to right gradient
			for (var i = x; i <= x + w; i++) {
				var inter = map(i, x, x + w, 0, 1);
				var c = lerpColor(c1, c2, inter);
				stroke(c);
				line(i, y, i, y + h);
			}
		}
	}
	this.modal = function(id) {
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
	this.Position = function() {
		if (windowHeight < windowWidth) {
			d.canvas.position(windowWidth / 2 - this.canvas.width / 2 - 200, document.getElementById('topOfPage').offsetTop + 100);
		} else {
			d.canvas.position(windowWidth / 2 - this.canvas.width / 2, document.getElementById('topOfPage').offsetTop + 100);
		}
		this.button('buttonProduit').position(this.offsetX - this.button('buttonProduit').width - 25, this.offsetY);
		this.button('buttonDesign').position(this.offsetX - this.button('buttonDesign').width - 25, this.offsetY + this.canvas.height / 5);
		this.button('buttonImage').position(this.offsetX - this.button('buttonImage').width - 25, this.offsetY + 2 * this.canvas.height / 5);
		this.button('buttonText').position(this.offsetX - this.button('buttonText').width - 25, this.offsetY + 3 * this.canvas.height / 5);
		this.button('buttonNb').position(this.offsetX - this.button('buttonNb').width - 25, this.offsetY + 4 * this.canvas.height / 5);
		this.button('face').position(this.offsetX + 30, this.offsetY + this.canvas.height + 20);
		this.button('dos').position(this.offsetX + 30 + this.canvas.width / 4, this.offsetY + this.canvas.height + 20);
		this.button('droite').position(this.offsetX + 30 + 2 * this.canvas.width / 4, this.offsetY + this.canvas.height + 20);
		this.button('gauche').position(this.offsetX + 30 + 3 * this.canvas.width / 4, this.offsetY + this.canvas.height + 20);
		var modalRight = document.getElementsByClassName('modal-right');
		for (var i = 0; i < modalRight.length; i++) {
			modalRight[i].style.position = "absolute";
			modalRight[i].style.top = this.offsetY + "px";
			modalRight[i].style.left = this.canvas.position().x + this.canvas.width + 50 + "px";
			modalRight[i].style.width = 2 * windowWidth / 5 + "px";
			modalRight[i].style.height = this.canvas.height + "px";
		};
	}
	this.history = {
		//pour activer les redo et undo sur le canvas
		undoList: {
			face: [],
			dos: [],
			gauche: [],
			droite: [],
		},
		index: 0,
		saveState: function() {
			var state = {};
			Object.assign(state, {
				'ci': d.ci,
				'ct': d.ct,
			});
			d.logo.forEach(function(e) {
				Object.assign(state, {
					['xImage' + e.nb.toString()]: e.x,
					['yImage' + e.nb.toString()]: e.y,
					['widthImage' + e.nb.toString()]: e.width,
					['heightImage' + e.nb.toString()]: e.height,
				});
			});
			d.text.forEach(function(e) {
				Object.assign(state, {
					['xText' + e.nb.toString()]: e.x,
					['yText' + e.nb.toString()]: e.y,
					['widthText' + e.nb.toString()]: e.width,
					['heightText' + e.nb.toString()]: e.height,
				});
			});
			/*if (this.index == this.undoList.length) {*/
			this.index++;
			if (d.fond == d.face) this.undoList.face.push(state);
			else if (d.fond == d.dos) this.undoList.dos.push(state);
			else if (d.fond == d.droite) this.undoList.droite.push(state);
			else if (d.fond == d.gauche) this.undoList.gauche.push(state);
			/*}*/
		},
		store: function(list, e) {
			e.x = parseFloat(list[this.index]['xImage' + e.nb.toString()]);
			e.y = parseFloat(list[this.index]['yImage' + e.nb.toString()]);
			e.width = parseFloat(list[this.index]['widthImage' + e.nb.toString()]);
			e.height = parseFloat(list[this.index]['heightImage' + e.nb.toString()]);
			e.right = e.x + e.width;
			e.bottom = e.y + e.height;
		},
		update: function() {
			d.logo.forEach(function(e) {
				if (isNaN(e.x) && isNaN(e.y) && isNaN(e.width) && isNaN(e.height)) {
					d.ci = d.logo.indexOf(e) - 1;
					d.logo.splice(d.logo.indexOf(e), 1);
				}
				if (d.fond == d.face) this.store(this.undoList.face, e);
				else if (d.fond == d.dos) this.store(this.undoList.dos, e);
				else if (d.fond == d.droite) this.store(this.undoList.droite, e);
				else if (d.fond == d.gauche) this.store(this.undoList.gauche, e);
			}, this);
			d.text.forEach(function(e) {
				if (isNaN(e.x) && isNaN(e.y) && isNaN(e.width) && isNaN(e.height)) {
					d.ct = d.logo.indexOf(e) - 1;
					d.text.splice(d.text.indexOf(e), 1);
				}
				if (d.fond == d.face) this.store(this.undoList.face, e);
				else if (d.fond == d.dos) this.store(this.undoList.dos, e);
				else if (d.fond == d.droite) this.store(this.undoList.droite, e);
				else if (d.fond == d.gauche) this.store(this.undoList.gauche, e);
			}, this);
			d.ci = this.undoList.face[this.index]['ci'];
			d.ct = this.undoList.face[this.index]['ct'];
			d.slider('xImage').value(d.logo[d.ci].x);
			d.slider('yImage').value(d.logo[d.ci].y);
			d.slider('largeurImage').value(d.logo[d.ci].width);
			d.slider('hauteurImage').value(d.logo[d.ci].height);
			d.input('xImageSetting').value(d.logo[d.ci].x);
			d.input('yImageSetting').value(d.logo[d.ci].x);
			d.input('largeurImageSetting').value(d.logo[d.ci].width);
			d.input('hauteurImageSetting').value(d.logo[d.ci].height);
			d.slider('xTexte').value(d.text[d.ct].x);
			d.slider('yTexte').value(d.text[d.ct].y);
			d.slider('largeurTexte').value(d.text[d.ct].width);
			d.slider('hauteurTexte').value(d.text[d.ct].height);
			d.input('xTexteSetting').value(d.text[d.ct].x);
			d.input('yTexteSetting').value(d.text[d.ct].x);
			d.input('largeurTexteSetting').value(d.text[d.ct].width);
			d.input('hauteurTexteSetting').value(d.text[d.ct].height);
		},
		undo: function() {
			if (this.index > 2) {
				this.index--;
				this.update();
			} else {
				d.logo[d.ci].image.src = "";
				this.index = 0;
			}
		},
		redo: function() {
			if (this.index < this.undoList.face.length - 1) {
				this.index++;
				this.update();
			}
		},
	}
}
