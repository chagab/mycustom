"use strict";

function Text(designer) {
	this.x = 150;
	this.y = 150;
	this.fontSize = 32;
	this.width = 100;
	this.height = 15;
	this.right = this.x + this.width;
	this.bottom = this.y + this.height;
	this.textColor = [0, 0, 0];
	this.draggingText = false;
	this.draggingResizerText;
	this.resizerRadius = 8;
	this.rr = this.resizerRadius * this.resizerRadius;
	this.nb = designer.text.length;
	this.content = "";
	this.xRot = 0;
	this.yRot = 0;
	this.aRot = 0;
	this.hitText = function (x, y) {
		//////////////////////////////////////////////////////////////////////
		//methode that return true if the text what hit and wrong otherwise//
		//it also change the current text of the designer !				//
		//////////////////////////////////////////////////////////////////////
		var hit = x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
		if (hit) designer.ct = this.nb;
		return hit;
	};
	this.anchorHitTestText = function (x, y) {
		///////////////////////////////////////////////////////////////////////////////
		//methode that return the "index" of the anchor that was hit and -1 otherwise//
		///////////////////////////////////////////////////////////////////////////////
		var dx = x - this.x;
		var dy = y - this.y;
		// top-left
		if (dx * dx + dy * dy <= this.rr) {
			return 0;
		}
		// top-right
		dx = x - this.right;
		dy = y - this.y;
		if (dx * dx + dy * dy <= this.rr) {
			return 1;
		}
		// bottom-right
		dx = x - this.right;
		dy = y - this.bottom;
		if (dx * dx + dy * dy <= this.rr) {
			return 2;
		}
		// bottom-left
		dx = x - this.x;
		dy = y - this.bottom;
		if (dx * dx + dy * dy <= this.rr) {
			return 3;
		}
		return -1;
	};
	this.drawDragAnchor = function (x, y) {
		///////////////////////////////
		//methode that draw an anchor//
		///////////////////////////////
		fill(0);
		designer.ctx.beginPath();
		designer.ctx.arc(x, y, this.resizerRadius, 0, Math.PI * 2, false);
		designer.ctx.closePath();
		designer.ctx.fill();
	};
	this.drawDragging = function (X, Y, Right, Bottom) {
		////////////////////////////////////////////////////////////////
		//methde that draw the anchor and the sqaure around the text //
		////////////////////////////////////////////////////////////////
		designer.ctx.beginPath();
		designer.ctx.moveTo(X, Y);
		designer.ctx.lineTo(Right, Y);
		designer.ctx.lineTo(Right, Bottom);
		designer.ctx.lineTo(X, Bottom);
		designer.ctx.closePath();
		designer.ctx.strokeStyle = '#0';
		designer.ctx.stroke();
		this.drawDragAnchor(X, Y);
		this.drawDragAnchor(Right, Y);
		this.drawDragAnchor(Right, Bottom);
		this.drawDragAnchor(X, Bottom);
	};
	this.dragg = function (e) {
		/////////////////////////////////////////////////
		//methode that allow the user to drag the text//
		/////////////////////////////////////////////////
		if (this.draggingResizerText > -1) {
			// resize the text
			var ratio = 0;
			switch (this.draggingResizerText) {
				case 0:
					//top-left
					this.x = mouseX;
					this.y = mouseY;
					ratio = (this.bottom - mouseY) / this.height;
					this.height = this.bottom - mouseY;
					break;
				case 1:
					//top-right
					this.y = mouseY;
					ratio = (this.bottom - mouseY) / this.height;
					this.height = this.bottom - mouseY;
					break;
				case 2:
					//bottom-right
					ratio = (mouseY - this.y) / this.height;
					this.height = mouseY - this.y;
					break;
				case 3:
					//bottom-left
					this.x = mouseX;
					ratio = (mouseY - this.y) / this.height;
					this.height = mouseY - this.y;
					break;
			}
			this.width *= ratio;
			// set the text right and bottom
			this.right = this.x + this.width;
			this.bottom = this.y + this.height;
			if (frameCount % 25 == 1) designer.history.saveState();
		}
		//if the user want to move the image
		else if (this.draggingText) {
				// move the text by the amount of the latest drag
				var dx = mouseX - designer.startX;
				var dy = mouseY - designer.startY;
				this.x += dx;
				this.y += dy;
				this.right += dx;
				this.bottom += dy;
				// reset the startXY for next time
				designer.startX = mouseX;
				designer.startY = mouseY;
				if (frameCount % 25 == 1) designer.history.saveState();
			}
	};
}
//# sourceMappingURL=Text-compiled.js.map
