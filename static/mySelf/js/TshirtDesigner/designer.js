function Designer() {
	this.canvas;
	this.ctx;
	this.canvasOffset;
	this.isDown = false;
	this.droped = false;
	this.pi2 = Math.PI * 2;
	this.resizerRadius = 8;
	this.rr = this.resizerRadius * this.resizerRadius;
	// varialbe pour la police
	this.font;
	// variables pour afficher le textil 
	this.fond;
	this.dos;
	this.gauche;
	this.droite;
	this.face;
	this.in;
	this.out;
	// variables pour les dragg (commun au deux types de dragg)
	this.offsetX;
	this.offsetY;
	this.startX;
	this.startY;
	// variables pour le dragg d'images
	this.imageClick = false;
	this.imageX = 50;
	this.imageY = 50;
	this.imageWidth;
	this.imageHeight;
	this.imageRight;
	this.imageBottom;
	this.draggingImage = false;
	this.draggingResizer = {
		x: 0,
		y: 0
	};
	// variables pour le dragg de texte
	this.text;
	this.textClick = false;
	this.textX = 240;
	this.textY = 240;
	this.textWidth = 50;
	this.textHeight = 50;
	this.textRight = this.textX + this.textWidth;
	this.textBottom = this.textY + this.textHeight;
	this.draggingText = false;
	this.draggingResizerText = {
		x: 0,
		y: 0
	};
	this.xImage = 0;
	this.yImage = 0;
	this.aImage = 0;
	//variable contenant le nombre d'image déposée
	this.nb = 0;
	// variables contenant les éléments du DOM
	this.h1;
	this.logo = [];
	this.p = [];
	this.buttons = [];
	this.textareas = [];
	this.inputs = [];
	this.sliders = [];
	this.imgs = [];
	this.divs = [];
	// on ajoute des méthodes pour pouvoir retrouver les éléments du DOM facilement 
	this.textarea = function(titre) {
		return this.textareas.find(function(element) {
			return element.elt.id == titre;
		})
	}
	this.button = function(titre) {
		return this.buttons.find(function(element) {
			return element.elt.innerText === titre;
		});
	}
	this.slider = function(titre) {
		return this.sliders.find(function(element) {
			return element.titre.elt.innerText === titre;
		});
	}
	this.input = function(titre) {
		return this.inputs.find(function(element) {
			return element.id === titre;
		});
	}
	this.div = function(titre) {
		return this.divs.find(function(element) {
			return element.elt.id === titre;
		});
	}
	this.hitImage = function(x, y) {
		return (x > this.imageX && x < this.imageX + this.imageWidth && y > this.imageY && y < this.imageY + this.imageHeight);
	}
	this.hitIn = function(x, y) {
		return (x > 10 && x < (10 + 25) && y > 25 && y < (25 + 25));
	}
	this.hitOut = function(x, y) {
		return (x > 30 && x < (30 + 25) && y > 25 && y < (25 + 25));
	}
	this.hitText = function(x, y) {
		return (x > this.textX && x < this.textX + this.textWidth && y > this.textY && y < this.textY + this.textHeight);
	}
	this.gotfile = function(file) {
		var message = "Votre Logo est trop grand ... \n";
		message += "Pour que nous puissions le gérer,";
		message += " une taille de 300x300 au maximum est recommandée.";
		message += " Nous vous conseillons de faire une copie de votre logo ";
		message += " et de modifier sa taille pour utiliser le T-shirt designer\n\n";
		message += "Envoyer nous alors les deux images : nous aurons alors une image"
		message += " en bonne qualité pour l'impression.";
		if (file.type === 'image') {
			console.log(file);
			if (file.size > 150000) {
				alert(message);
			} else {
				d.droped = true;
				d.numberOfImage++;
				d.logo.push(new Image());
				d.logo[d.nb].src = file.data;
				d.imageWidth = d.logo[d.nb].width;
				d.imageHeight = d.logo[d.nb].height;
				d.imageRight = d.imageX + d.imageWidth;
				d.imageBottom = d.imageY + d.imageHeight;
			}
		} else {
			println('Not an image file!');
		}
	}
	this.drawDragging = function(X, Y, Right, Bottom, Width) {
		this.drawDragAnchor(X, Y);
		this.drawDragAnchor(X + Width / 2, Y, true);
		this.drawDragAnchor(Right, Y);
		this.drawDragAnchor(Right, Bottom);
		this.drawDragAnchor(X, Bottom);
		this.ctx.beginPath();
		this.ctx.moveTo(X, Y);
		this.ctx.lineTo(Right, Y);
		this.ctx.lineTo(Right, Bottom);
		this.ctx.lineTo(X, Bottom);
		this.ctx.closePath();
		this.ctx.strokeStyle = '#0';
		this.ctx.stroke();
	}
	this.drawDragAnchor = function(x, y, rot) {
		fill(0);
		if (rot) {
			fill(0);
		}
		this.ctx.beginPath();
		this.ctx.arc(x, y, this.resizerRadius, 0, this.pi2, false);
		this.ctx.closePath();
		this.ctx.fill();
	}
	this.buttonStyle = function(button) {
		button.style('background-position', 'center center');
		button.style('height', '70px');
		button.style('width', '70px');
		button.style('background-size', 'cover');
		button.style('border-radius', '5px');
		button.style('box-shadow', '1px 1px 5px black');
		button.style('font-family', 'CaviarDreams');
	}
	this.textSizing = function(x, y) {
		if (this.hitIn(x, y)) {
			this.textSize += 0.5;
		}
		if (this.hitOut(x, y)) {
			if (this.textSize == 1) this.textSize = 1;
			else this.textSize -= 0.5;
		}
	}
	this.anchorHitTestImage = function(x, y) {
		var dx, dy;
		// top-left
		dx = x - this.imageX;
		dy = y - this.imageY;
		if (dx * dx + dy * dy <= this.rr) {
			return (0);
		}
		// top-right
		dx = x - this.imageRight;
		dy = y - this.imageY;
		if (dx * dx + dy * dy <= this.rr) {
			return (1);
		}
		// bottom-right
		dx = x - this.imageRight;
		dy = y - this.imageBottom;
		if (dx * dx + dy * dy <= this.rr) {
			return (2);
		}
		// bottom-left
		dx = x - this.imageX;
		dy = y - this.imageBottom;
		if (dx * dx + dy * dy <= this.rr) {
			return (3);
		}
		// rotation
		dx = x - (this.imageX + this.imageWidth / 2);
		dy = y - this.imageY;
		if (dx * dx + dy * dy <= this.rr) {
			return (4);
		}
		return (-1);
	}
	this.anchorHitTestText = function(x, y) {
		var dx, dy;
		// top-left
		dx = x - this.textX;
		dy = y - this.textY;
		if (dx * dx + dy * dy <= this.rr) {
			return (0);
		}
		// top-right
		dx = x - this.textRight;
		dy = y - this.textY;
		if (dx * dx + dy * dy <= this.rr) {
			return (1);
		}
		// bottom-right
		dx = x - this.textRight;
		dy = y - this.textBottom;
		if (dx * dx + dy * dy <= this.rr) {
			return (2);
		}
		// bottom-left
		dx = x - this.textX;
		dy = y - this.textBottom;
		if (dx * dx + dy * dy <= this.rr) {
			return (3);
		}
		// rotation
		dx = x - (this.textX + this.textWidth / 2);
		dy = y - this.textY;
		if (dx * dx + dy * dy <= this.rr) {
			return (4);
		}
		return (-1);
	}
	this.dragg = function(e) {
		if (this.draggingResizer > -1) {
			mouseX = parseInt(e.clientX - this.offsetX);
			mouseY = parseInt(e.clientY - this.offsetY);
			// resize the image
			switch (this.draggingResizer) {
				case 0:
					//top-left
					this.imageX = mouseX;
					this.imageWidth = this.imageRight - mouseX;
					this.imageY = mouseY;
					this.imageHeight = this.imageBottom - mouseY;
					break;
				case 1:
					//top-right
					this.imageY = mouseY;
					this.imageWidth = mouseX - this.imageX;
					this.imageHeight = this.imageBottom - mouseY;
					break;
				case 2:
					//bottom-right
					this.imageWidth = mouseX - this.imageX;
					this.imageHeight = mouseY - this.imageY;
					break;
				case 3:
					//bottom-left
					this.imageX = mouseX;
					this.imageWidth = this.imageRight - mouseX;
					this.imageHeight = mouseY - this.imageY;
					break;
				case 4:
					//rotation
					console.log('in');
					this.xImage = cos(mouseY * 0.017453292519943);
					this.yImage = sin(mouseY * 0.017453292519943);
					this.aImage = atan2(this.yImage, this.xImage);
					break;
			}
			if (this.imageWidth < 25) {
				this.imageWidth = 25;
			}
			if (this.imageHeight < 25) {
				this.imageHeight = 25;
			}
			// set the image right and bottom
			this.imageRight = this.imageX + this.imageWidth;
			this.imageBottom = this.imageY + this.imageHeight;
		} else if (this.draggingImage) {
			this.imageClick = false;
			mouseX = parseInt(e.clientX - this.offsetX);
			mouseY = parseInt(e.clientY - this.offsetY);
			// move the image by the amount of the latest drag
			var dx = mouseX - this.startX;
			var dy = mouseY - this.startY;
			this.imageX += dx;
			this.imageY += dy;
			this.imageRight += dx;
			this.imageBottom += dy;
			// reset the startXY for next time
			this.startX = mouseX;
			this.startY = mouseY;
		}
		/////////////////////////////
		// 			text 		   //
		/////////////////////////////
		if (this.draggingResizerText > -1) {
			mouseX = parseInt(e.clientX - this.offsetX);
			mouseY = parseInt(e.clientY - this.offsetY);
			// resize the text
			switch (this.draggingResizerText) {
				case 0:
					//top-left
					this.textX = mouseX;
					this.textWidth = this.textRight - mouseX;
					this.textY = mouseY;
					this.textHeight = this.textBottom - mouseY;
					break;
				case 1:
					//top-right
					this.textY = mouseY;
					this.textWidth = mouseX - this.textX;
					this.textHeight = this.textBottom - mouseY;
					break;
				case 2:
					//bottom-right
					this.textWidth = mouseX - this.textX;
					this.textHeight = mouseY - this.textY;
					break;
				case 3:
					//bottom-left
					this.textX = mouseX;
					this.textWidth = this.textRight - mouseX;
					this.textHeight = mouseY - this.textY;
					break;
				case 4:
					//rotation
					console.log('in');
					this.xtext = cos(mouseY * 0.017453292519943);
					this.ytext = sin(mouseY * 0.017453292519943);
					this.atext = atan2(this.ytext, this.xtext);
					break;
			}
			if (this.textWidth < 25) {
				this.textWidth = 25;
			}
			if (this.textHeight < 25) {
				this.textHeight = 25;
			}
			// set the text right and bottom
			this.textRight = this.textX + this.textWidth;
			this.textBottom = this.textY + this.textHeight;
		} else if (this.draggingText) {
			this.textClick = false;
			mouseX = parseInt(e.clientX - this.offsetX);
			mouseY = parseInt(e.clientY - this.offsetY);
			// move the text by the amount of the latest drag
			var dx = mouseX - this.startX;
			var dy = mouseY - this.startY;
			this.textX += dx;
			this.textY += dy;
			this.textRight += dx;
			this.textBottom += dy;
			// reset the startXY for next time
			this.startX = mouseX;
			this.startY = mouseY;
		}
	}
}

function Logo() {
	this.imageClick = false;
	this.imageX = 50;
	this.imageY = 50;
	this.imageWidth;
	this.imageHeight;
	this.imageRight;
	this.imageBottom;
	this.draggingImage = false;
	this.draggingResizer = {
		x: 0,
		y: 0
	};
}

function Text() {
	this.textClick = false;
	this.textX = 240;
	this.textY = 240;
	this.textWidth = 50;
	this.textHeight = 50;
	this.textRight = this.textX + this.textWidth;
	this.textBottom = this.textY + this.textHeight;
	this.draggingText = false;
	this.draggingResizerText = {
		x: 0,
		y: 0
	};
}
var Slider = (function() {
	// on utilise les closures pour incrémenter ordre à chaque instance d'objet
	// cela sert à décaler les sliders
	var ordre = 0;
	return function Slider(titre, debut, fin, pas, posX, posY) {
		ordre++;
		this.x = posX;
		this.y = posY;
		//this.valeur = 0;
		this.slider = createSlider(debut, fin, pas).position(this.x + 50, this.y + ordre * 20).size(200, 0);
		this.valeur = createP(this.slider.value()).position(this.x + 50 + this.slider.width + 20, this.y + ordre * 20);
		this.titre = createP(titre).position(this.x + 50 + this.slider.width + this.valeur.size().width + 50, this.y + ordre * 20);
		this.width = this.slider.width + this.valeur.size().width + this.titre.size().width + 70;
		this.show = function() {
			this.valeur.html(this.slider.value());
		}
		this.value = function(value) {
			if (value) {
				this.slider.value(value);
			} else {
				return this.slider.value();
			}
		}
		this.position = function(newX, newY) {
			if (newX && newY) {
				this.x = newX;
				this.y = newY;
				this.slider.position(newX, newY);
				this.valeur.position(this.x + this.slider.width + 20, this.y - 15);
				this.titre.position(this.x + this.slider.width + this.valeur.size().width + 50, this.y - 15);
			} else {
				return this.slider.position();
			}
		}
		this.hide = function() {
			this.slider.hide();
			this.valeur.hide();
			this.titre.hide();
		}
	}
})();