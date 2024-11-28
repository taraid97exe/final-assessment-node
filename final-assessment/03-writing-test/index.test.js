import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Hasil sum: ', () => {
    // jumlah angka positif
    assert.strictEqual(sum(2, 3), 5, '5');
    // jumlah angka negatif
    assert.strictEqual(sum(-3, -2), -5, '-5');
    // jumlah angka positif dan negatif
    assert.strictEqual(sum(-3, 2), -1, '-1');
    // jumlah dengan nol
    assert.strictEqual(sum(5, 0), 5, '5');
    assert.strictEqual(sum(0, 5), 5, '5');
});
