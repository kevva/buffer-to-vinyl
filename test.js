import fs from 'fs';
import getStream from 'get-stream';
import test from 'ava';
import m from '.';

const fixture = fs.readFileSync(__filename, null);

test('create vinyl file from buffer', t => {
	const file = m.file(fixture, 'foo');
	t.true(file.contents.length > 0);
	t.is(file.path, 'foo');
});

test('create vinyl stream from buffer', async t => {
	const [file] = await getStream.array(m.stream(fixture, 'foo'));
	t.true(file.contents.length > 0);
	t.is(file.path, 'foo');
});
