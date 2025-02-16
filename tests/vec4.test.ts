import { describe, test, expect } from 'bun:test';
import { vec4 } from '../src/vec4.js';

const SIZEOF = 4;

describe('vec4', () => {
  test('basic', () => {
    const v = vec4(0, 1, 2, 3);

    const { x, y, z, w, r, g, b, a, s, t, p, q } = v;
    expect(x).toBe(0);
    expect(y).toBe(1);
    expect(z).toBe(2);
    expect(w).toBe(3);
    expect(r).toBe(0);
    expect(g).toBe(1);
    expect(b).toBe(2);
    expect(a).toBe(3);
    expect(s).toBe(0);
    expect(t).toBe(1);
    expect(p).toBe(2);
    expect(q).toBe(3);

    // @ts-ignore
    const [zero, one, two, three] = v;
    expect(zero).toBe(0);
    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);

    const { xxxx, gggg, pppp, wwww } = v;
    expect(xxxx.x).toBe(0);
    expect(xxxx.y).toBe(0);
    expect(xxxx.z).toBe(0);
    expect(xxxx.w).toBe(0);
    expect(gggg.x).toBe(1);
    expect(gggg.y).toBe(1);
    expect(gggg.z).toBe(1);
    expect(gggg.w).toBe(1);
    expect(pppp.x).toBe(2);
    expect(pppp.y).toBe(2);
    expect(pppp.z).toBe(2);
    expect(pppp.w).toBe(2);
    expect(wwww.x).toBe(3);
    expect(wwww.y).toBe(3);
    expect(wwww.z).toBe(3);
    expect(wwww.w).toBe(3);
  });

  test('fill', () => {
    const value = 3;
    const v = vec4(value);
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

      const aValues = [0, 1, 2, 3];
      const bValues = [6, 0, 4, 9];
      const a = vec4(...aValues);
      const b = vec4(...bValues);
      const c = a[op](b);
      for (let i = 0; i < SIZEOF; i++) {
        expect(c[i].toFixed(6)).toBe(mock(aValues[i], bValues[i]).toFixed(6));
      }

      // @ts-ignore
      const cValues = [...c];
      const dValues = [3, 8, 7, 1];
      const d = c[op](...dValues);
      for (let i = 0; i < SIZEOF; i++) {
        expect(d[i].toFixed(6)).toBe(mock(cValues[i], dValues[i]).toFixed(6));
      }
    }),
  );

  test('clone', () => {
    const a = vec4(1, 2, 3, 4);
    const b = vec4(5, 6, 7, 8);
    const c = a.clone().add(b);
    for (let i = 0; i < SIZEOF; i++) {
      expect(c[i] === a[i]).toBe(false);
      expect(c[i] === b[i]).toBe(false);
    }
  });
});