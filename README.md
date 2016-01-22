## rnd

Return a random integer

## Install

```bash
$ npm install rnd
```

## Usage

```js
var random = require('rnd')

random()
// => 519306295418

random(99) // allows specifying the max n
// => 35

random(99, 77) // => max n (defaults to 999999999999) and min n (defaults to 0)
// => 83
```
