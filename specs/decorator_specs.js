const assert = require('assert');
const Decorator = require('../models/decorator.js')
const Room = require('../models/room.js')
const Paint = require('../models/paint.js')

describe('Decorator', function () {

  let decorator;

  beforeEach(function () {
    decorator = new Decorator(0);
  });

  it('should start with an empty paint stock', function () {
    const actual = decorator.paintStock;
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

});

describe('Painting', function () {
  let decorator;
  let paint;
  let room;

  beforeEach(function () {
    decorator = new Decorator(0);
    room = new Room(30, false);
    paint = new Paint(30);
  });

  it('should be able to add paint to stock', function () {
    const actual = decorator.addPaint(paint);
    const expected = decorator.paintStock;
    assert.strictEqual(actual, expected);
  });

  it('should be able to check the amount of paint', function () {
    decorator.addPaint(paint);
    const actual = decorator.paintStock;
    const expected = 30;
    assert.strictEqual(actual, expected);
  });

  it('should be able to check it has enough paint', function () {
    decorator.addPaint(paint);
    const actual = decorator.canPaintRoom(room);
    const expected = true
    assert.strictEqual(actual, expected);
  });

  it('should be able to paint the room', function () {
    decorator.addPaint(paint);
    decorator.canPaintRoom(room);
    decorator.paintRoom(room);
    const actual = room.painted;
    const expected = true;
    assert.strictEqual(actual, expected);
  });

});
