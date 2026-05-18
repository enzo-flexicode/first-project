import { test } from 'node:test';
import assert from 'node:assert/strict';

test('addition works', () => {
  assert.equal(1 + 1, 2);
});

test('string concatenation', () => {
  assert.equal('foo' + 'bar', 'foobar');
});

test('array length', () => {
  assert.equal([1, 2, 3].length, 3);
});

test('intentional failure: wrong sum', () => {
  assert.equal(2 + 2, 5);
});

test('intentional failure: missing property', () => {
  const user = { name: 'Ada' };
  assert.equal(user.email, 'ada@example.com');
});
