const assert = require('assert');
const Paint = require('../models/paint.js')

describe('Paint', function () {

  let paint;

  beforeEach(function () {
    paint = new Paint(5)
  });

  it('should have litres of paint', function () {
    const actual = paint.amount;
    const expected = 5;
    assert.strictEqual(actual, expected);
  });

  it('should be empty', function () {
    const actual = paint.emptyPaint(5);
    const expected = 0;
    assert.strictEqual(actual, expected);
  });

  it('should be able to check if its empty - false', function () {
    const actual = paint.checkPaint();
    const expected = false;
    assert.strictEqual(actual, expected);
  });

  it('should be able to check if its empty - true', function () {
    paint1 = new Paint(0)
    const actual = paint1.checkPaint();
    const expected = true;
    assert.strictEqual(actual, expected);
  });

});
