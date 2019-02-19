const Paint = function(amount) {
  this.amount = amount;
}


Paint.prototype.emptyPaint = function(reduceBy) {
  newAmount = this.amount - reduceBy;
  this.amount = newAmount;
  return newAmount;
};

Paint.prototype.checkPaint = function() {
  if(this.amount === 0){
    return true;
   }
   else {
     return false;
   }
};







module.exports = Paint;
