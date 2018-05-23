'use strict'

const assert = require('assert')
const size = require('.')

describe('size()', function () {
  it('should return the size of an array', function () {
    assert.strictEqual(size([]), 0)
    assert.strictEqual(size(['a', 'b']), 2)
  })

  it('should return the size of an iterable', function () {
    assert.strictEqual(size([][Symbol.iterator]()), 0)
    assert.strictEqual(size([null, null][Symbol.iterator]()), 2)
  })

  it('should return the size of a Map', function () {
    assert.strictEqual(size(new Map()), 0)
    assert.strictEqual(size(new Map([['key', 'value']])), 1)
  })

  it('should return the size of an Object', function () {
    assert.strictEqual(size({}), 0)
    assert.strictEqual(size({a: 1, b: 2}), 2)
  })

  it('should include inherited props in Object size if `inObj` is true', function () {
    class A {}
    A.prototype.key = 'value'
    assert.strictEqual(size(new A()), 0)
    assert.strictEqual(size(new A(), {inObj: true}), 1)
  })

  it('should include non-enumerable props in Object size if `reflectObj` is true', function () {
    assert(size({}, {inObj: true, reflectObj: true}) > 1)
  })

  it('should return the size of a Set', function () {
    assert.strictEqual(size(new Set()), 0)
    assert.strictEqual(size(new Set([1, 2, 3])), 3)
  })

  it('should throw an error if given a WeakMap', function () {
    assert.throws(() => size(new WeakMap()), TypeError)
  })

  it('should throw an error if given a WeakSet', function () {
    assert.throws(() => size(new WeakSet()), TypeError)
  })

  it('should throw an error if given a non-object', function () {
    assert.throws(() => size(123), TypeError)
  })
})
