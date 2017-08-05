function Logo(file, designer) {
  this.image = new Image();
  if (file) {
    this.image.src = file.src;
  }
  this.x = 50;
  this.y = 50;
  this.ratio = (1 / 2) * designer.canvas.width / this.image.width;
  this.width = this.image.width * this.ratio;
  this.height = this.image.height * this.ratio;
  this.right = this.image.x + this.image.width;
  this.bottom = this.image.y + this.image.height;
  this.nb = designer.logo.length;
  this.draggingImage = false;
  this.draggingResizer;
  this.resizerRadius = 8;
  //variables pour les rotations de l'image
  this.xRot = 0;
  this.yRot = 0;
  this.aRot = 0;
  this.rr = this.resizerRadius * this.resizerRadius;
  this.hitImage = function(x, y) {
    //////////////////////////////////////////////////////////////////////
    //methode that return true if the image what hit and wrong otherwise//
    //it also change the current image of the designer !				//
    //////////////////////////////////////////////////////////////////////
    var hit = (x > this.x && x < (this.x + this.width) && y > this.y && y < (this.y + this.height));
    if (hit) designer.ci = this.nb;
    return hit;
  }
  this.anchorHitTestImage = function(x, y) {
    ///////////////////////////////////////////////////////////////////////////////
    //methode that return the "index" of the anchor that was hit and -1 otherwise//
    ///////////////////////////////////////////////////////////////////////////////
    // top-left
    var dx = x - this.x;
    var dy = y - this.y;
    if (dx * dx + dy * dy <= this.rr) {
      return (0);
    }
    // top-right
    dx = x - this.right;
    dy = y - this.y;
    if (dx * dx + dy * dy <= this.rr) {
      return (1);
    }
    // bottom-right
    dx = x - this.right;
    dy = y - this.bottom;
    if (dx * dx + dy * dy <= this.rr) {
      return (2);
    }
    // bottom-left
    dx = x - this.x;
    dy = y - this.bottom;
    if (dx * dx + dy * dy <= this.rr) {
      return (3);
    }
    return (-1);
  }
  this.drawDragAnchor = function(x, y) {
    ///////////////////////////////
    //methode that draw an anchor//
    ///////////////////////////////
    fill(0);
    designer.ctx.beginPath();
    designer.ctx.arc(x, y, this.resizerRadius, 0, Math.PI * 2, false);
    designer.ctx.closePath();
    designer.ctx.fill();
  }
  this.drawDragging = function(X, Y, Right, Bottom) {
    ////////////////////////////////////////////////////////////////
    //methde that draw the anchor and the sqaure around the image //
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
  }
  this.dragg = function(e) {
    /////////////////////////////////////////////////
    //methode that allow the user to drag the image//
    /////////////////////////////////////////////////
    //if the user wants to resize the image
    if (this.draggingResizer > -1) {
      // resize the image
      //if the ratio don't need to be respected
      if (!designer.conserverRatio) {
        switch (this.draggingResizer) {
          case 0:
            //top-left
            this.x = mouseX;
            this.y = mouseY;
            this.width = this.right - mouseX;
            this.height = this.bottom - mouseY;
            break;
          case 1:
            //top-right
            this.y = mouseY;
            this.width = mouseX - this.x;
            this.height = this.bottom - mouseY;
            break;
          case 2:
            //bottom-right
            this.width = mouseX - this.x;
            this.height = mouseY - this.y;
            break;
          case 3:
            //bottom-left
            this.x = mouseX;
            this.width = this.right - mouseX;
            this.height = mouseY - this.y;
            break;
        }
      }
      //if the ratio need to be respected
      else {
        switch (this.draggingResizer) {
          case 0:
            //top-left
            this.x = mouseX;
            this.y = mouseY;
            this.ratio = (this.right - mouseX) / this.width;
            this.width = this.right - mouseX;
            break;
          case 1:
            //top-right
            this.y = mouseY;
            this.ratio = (mouseX - this.x) / this.width;
            this.width = mouseX - this.x;
            break;
          case 2:
            //bottom-right
            this.ratio = (mouseX - this.x) / this.width;
            this.width = mouseX - this.x;
            break;
          case 3:
            //bottom-left
            this.x = mouseX;
            this.ratio = (this.right - mouseX) / this.width;
            this.width = this.right - mouseX;
            break;
        }
        this.height *= this.ratio;
      }
      //minimum height and width for the image
      if (this.width < 25) this.width = 25;
      if (this.height < 25) this.height = 25;
      // set the image right and bottom property
      this.right = this.x + this.width;
      this.bottom = this.y + this.height;
      //save the current state of the image (every 25th frames)
      if (frameCount % 25 == 1) designer.history.saveState();
    }
    //if the user want to move the image
    else if (this.draggingImage) {
      // move the image by the amount of the latest drag
      var dx = mouseX - designer.startX;
      var dy = mouseY - designer.startY;
      this.x += dx;
      this.y += dy;
      this.right += dx;
      this.bottom += dy;
      // reset designer startXY for next time
      designer.startX = mouseX;
      designer.startY = mouseY;
      if (frameCount % 25 == 1) designer.history.saveState();
    }
  }
}
