import { describe, test, expect } from 'bun:test';
import { vec2 } from '../src/vec2.js';

describe('vec2 test', () => {
  test('basic test', () => {
    const v = vec2(0, 1);

    const { x, y, r, g, s, t } = v;
    expect(x).toBe(0);
    expect(y).toBe(1);
    expect(r).toBe(0);
    expect(g).toBe(1);
    expect(s).toBe(0);
    expect(t).toBe(1);

    // @ts-ignore
    const [zero, one] = v;
    expect(zero).toBe(0);
    expect(one).toBe(1);

    const { xx, gg } = v;
    expect(xx.x).toBe(0);
    expect(xx.y).toBe(0);
    expect(gg.x).toBe(1);
    expect(gg.y).toBe(1);
  });
});