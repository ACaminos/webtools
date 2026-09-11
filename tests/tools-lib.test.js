import test from 'node:test';
import assert from 'node:assert/strict';
import { findDuplicate, isValidUrl, parseIndex, validateProduct } from '../scripts/tools-lib.js';

test('valida producto y URL', () => {
  assert.deepEqual(validateProduct({ name: 'X', url: 'https://a.com', description: 'd', preview: '/notImage.png' }), []);
  assert.ok(validateProduct({ name: '', url: 'notaurl', description: '', preview: 'x' }).length >= 3);
  assert.equal(isValidUrl('https://example.com'), true);
  assert.equal(isValidUrl('/local.png'), true);
  assert.equal(isValidUrl('ftp://x'), false);
});

test('detecta duplicados e ignora el propio en edición', () => {
  const tools = [{ id: 1, category: 'A', products: [{ id: 1, name: 'Foo', url: 'https://foo.com' }] }];
  assert.ok(findDuplicate(tools, 'foo', 'https://otra.com'));
  assert.equal(findDuplicate(tools, 'foo', 'https://foo.com', { categoryId: 1, productId: 1 }), null);
  assert.equal(parseIndex('2', 3), 2);
  assert.equal(parseIndex('0', 3), null);
  assert.equal(parseIndex('x', 3), null);
});
