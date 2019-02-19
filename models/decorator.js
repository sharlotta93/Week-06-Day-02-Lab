Decorator = function(paintStock) {
  this.paintStock = paintStock;
}

Decorator.prototype.addPaint = function(paint) {
  this.paintStock += paint.amount;
  return this.paintStock;
};

Decorator.prototype.canPaintRoom = function(room) {
  if(room.area === this.paintStock){
    return true;
  } else {
    return false;
  }
};

Decorator.prototype.paintRoom = function(room) {
  if ( this.canPaintRoom(room) === true ) {
  room.painted = true;
  return room.painted;
}
};


module.exports = Decorator;
