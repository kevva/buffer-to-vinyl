# buffer-to-vinyl [![Build Status](https://travis-ci.org/kevva/buffer-to-vinyl.svg?branch=master)](https://travis-ci.org/kevva/buffer-to-vinyl)

> Create a vinyl file or stream from a buffer


## Install

```
$ npm install buffer-to-vinyl
```


## Usage

```js
const fs = require('fs');
const bufferToVinyl = require('buffer-to-vinyl');

bufferToVinyl.file(fs.readFileSync('foo.jpg', null));
bufferToVinyl.stream(fs.readFileSync('foo.jpg', null));
```


## API

### bufferToVinyl.file(buffer, [name])

Returns a `Vinyl` file.

#### buffer

Type: `Buffer`

Buffer to create the file from.

#### name

Type: `string`

Optional file name.

### bufferToVinyl.stream(buffer, [name])

Returns a object `PassThrough` stream.

#### buffer

Type: `Buffer`

Buffer to create the stream from.

#### name

Type: `string`

Optional file name.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
