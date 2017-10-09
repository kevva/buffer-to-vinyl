'use strict';
const fileType = require('file-type');
const PassThrough = require('readable-stream/passthrough');
const uuid = require('uuid');
const Vinyl = require('vinyl');

module.exports.file = (buf, name) => {
	const ext = fileType(buf) ? `.${fileType(buf).ext}` : null;

	return new Vinyl({
		contents: buf,
		path: (name || uuid.v4()) + (ext || '')
	});
};

module.exports.stream = (buf, name) => {
	const stream = new PassThrough({objectMode: true});
	stream.end(module.exports.file(buf, name));
	return stream;
};
