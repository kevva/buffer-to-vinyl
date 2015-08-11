'use strict';
var fs = require('fs');
var concatStream = require('concat-stream');
var test = require('ava');
var bufferToVinyl = require('./');

test('create vinyl file from buffer', function (t) {
	var file = fs.readFileSync(__filename, null);
	t.assert(bufferToVinyl.file(file).contents.length, bufferToVinyl.file(file).contents.length);
	t.assert(bufferToVinyl.file(file, 'foo').path === 'foo', bufferToVinyl.file(file, 'foo').path);
	t.end();
});

test('create vinyl stream from buffer', function (t) {
	t.plan(2);

	var file = fs.readFileSync(__filename, null);
	var stream = bufferToVinyl.stream(file, 'foo');

	stream.pipe(concatStream(function (files) {
		t.assert(files[0].contents.length, files[0].contents.length);
		t.assert(files[0].path === 'foo', files[0].path);
	}));
});
