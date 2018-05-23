'use strict'

const is = require('is-instance-of')
const isIterable = require('is-iterable')
const isObject = require('is-object')
const propKeys = require('prop-keys')
const sbo = require('sbo')
const typedArrays = require('typed-arrays').names()

module.exports = sbo(function size (collection, {arrays = [], ducktype, inObj, maps = [], reflectObj, sets = [], weakMaps = [], weakSets = [], ...options} = {}) {
  if ((ducktype && 'size' in collection) || is(collection, ['Map', maps, 'Set', sets])) {
    return collection.size
  } else if ((ducktype && 'length' in collection) || typeof collection === 'string' || is(collection, ['Array', arrays, typedArrays])) {
    return collection.length
  } else if (isIterable(collection)) {
    return Array.from(collection).length
  } else if (is(collection, ['WeakMap', weakMaps, 'WeakSet', weakSets])) {
    throw new TypeError('Weak collections are not countable')
  } else if (isObject(collection)) {
    return propKeys(collection, {...options, own: !inObj, enumOnly: !reflectObj}).length
  } else {
    throw new TypeError('Cannot return the size of a non-object')
  }
})
