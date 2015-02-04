'use strict';

var bufferToVinyl = require('./');
var concat = require('concat-stream');
var fs = require('fs');
var test = require('ava');

test('create vinyl file from buffer', function (t) {
	var file = fs.readFileSync(__filename, null);
	t.assert(bufferToVinyl.file(file).contents.length);
	t.assert(bufferToVinyl.file(file, 'foo').path === 'foo');
	t.end();
});

test('create vinyl stream from buffer', function (t) {
	t.plan(2);

	var file = fs.readFileSync(__filename, null);
	var stream = bufferToVinyl.stream(file, 'foo');

	stream.pipe(concat(function (files) {
		t.assert(files[0].contents.length);
		t.assert(files[0].path === 'foo');
	}));
});
