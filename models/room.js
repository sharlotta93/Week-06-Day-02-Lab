const Room = function(area, painted) {
  this.area = area;
  this.painted = painted;
}


// Room.prototype.paintMe = function (decorator) {
//   if (decorator.roomPainted === true) {
//     this.painted = true
//   }
// };
module.exports = Room;
