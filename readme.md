# vsize

Counts the elements in an Array, Map, Object, Set, or other collection.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i vsize
```

## API

The module exports a single function.

### Parameters

1. Bindable: `collection` (Array, iterable, Map, Object, Set, string, or Typed Array): The collection whose elements you want to count.
2. Optional: Object argument:
    * `arrays` / `maps` / `sets` (arrays of classes/strings): Arrays of classes and/or string names of classes that should be treated as equivalent to `Array`/`Map`/`Set` (respectively).
    * `ducktype` (boolean): Whether or not to support unrecognized collection types that have a `size` or `length` property. Defaults to `false`.
    * `inObj` (boolean): Whether or not to include inherited properties if `collection` is an Object (i.e. not another recognized type). Defaults to `false`.
    * `reflectObj` (boolean): Whether or not to use reflection to include non-enumerable Object properties. Only takes effect if `collection` is an Object (i.e. not another recognized type). Defaults to `false`.

### Return Value

The number of items in the collection.

## Example

```javascript
const size = require('vsize')

size([]) // 0
size({a: 1, b: 2}) // 2
size('test') // 4
size(new Map([['key', 'value']])) // 1
```

## Related

The “k” family of modules works on keyed/indexed collections.

* [khas](https://github.com/lamansky/khas)
* [kget](https://github.com/lamansky/kget)
* [kedit](https://github.com/lamansky/kedit)
* [kset](https://github.com/lamansky/kset)
* [kinc](https://github.com/lamansky/kinc)
* [kdel](https://github.com/lamansky/kdel)

The “v” family of modules works on any collection of values.

* [vhas](https://github.com/lamansky/vhas)
* [vget](https://github.com/lamansky/vget)
* [vadd](https://github.com/lamansky/vadd)
* [vdel](https://github.com/lamansky/vdel)
