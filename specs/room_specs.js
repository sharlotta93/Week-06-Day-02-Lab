const assert = require('assert');
const Room = require('../models/room.js')

describe('Room', function () {

  let room;

  beforeEach(function () {
    room = new Room(30, false)
  });

  it('should have an area', function () {
    const actual = room.area;
    const expected = 30;
    assert.strictEqual(actual, expected);
  });

  it('should start not painted', function () {
    const actual = room.painted;
    const expected = false;
    assert.strictEqual(actual, expected);
  });

});
