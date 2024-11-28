import { describe, it} from 'node:test';
import sum from './index.js';
import { strict as assert } from 'node:assert';

describe('Pengujian fungsi Sum', () => {
    it('jumlah angka positif', () => {
        assert.equal(sum(2, 4), 6);
    });

    it('jika salah satu/kedua angka masukan bukan nol', () => {
        assert.equal(sum('2', 4), 0);
        assert.equal(sum(2, '4'), 0);
        assert.equal(sum('2', '4'), 0);
        assert.equal(sum(null, 4), 0);
        assert.equal(sum(2, undefined), 0);
        assert.equal(sum(true, 4), 0);
    });

    it('jumlah angka negatif', () => {
        assert.equal(sum(-2, 4), 0);
        assert.equal(sum(2, -4), 0);
        assert.equal(sum(-2, -4), 0);
    });

    it('jika salah satu/kedua angka masukan nilai nol', () => {
        assert.equal(sum(0, 4), 4);
        assert.equal(sum(2, 0), 2);
        assert.equal(sum(0, 0), 0);
    });
});