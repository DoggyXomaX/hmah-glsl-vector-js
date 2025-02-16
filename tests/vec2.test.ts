import { describe, test, expect } from 'bun:test';
import { vec2 } from '../src/vec2.js';

const SIZEOF = 2;

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

  test('fill', () => {
    const value = 3;
    const v = vec2(value);
    for (let i = 0; i < SIZEOF; i++) {
      expect(v[i]).toBe(value);
    }
  });

  const mocks = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
    mod: (a, b) => a % b,
  };
  Object.keys(mocks).forEach((op) =>
    test(op, () => {
      const mock = mocks[op];

      const aValues = [0, 1];
      const bValues = [6, 0];
      const a = vec2(...aValues);
      const b = vec2(...bValues);
      const c = a[op](b);
      for (let i = 0; i < SIZEOF; i++) {
        expect(c[i].toFixed(6)).toBe(mock(aValues[i], bValues[i]).toFixed(6));
      }

      // @ts-ignore
      const cValues = [...c];
      const dValues = [3, 8];
      const d = c[op](...dValues);
      for (let i = 0; i < SIZEOF; i++) {
        expect(d[i].toFixed(6)).toBe(mock(cValues[i], dValues[i]).toFixed(6));
      }
    }),
  );

  test('clone', () => {
    const a = vec2(1, 2);
    const b = vec2(5, 6);
    const c = a.clone().add(b);
    for (let i = 0; i < SIZEOF; i++) {
      expect(c[i] === a[i]).toBe(false);
      expect(c[i] === b[i]).toBe(false);
    }
  });
});