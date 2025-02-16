import { describe, test, expect } from 'bun:test';
import { vec3 } from '../src/vec3.js';

const SIZEOF = 3;

describe('vec3', () => {
  test('basic', () => {
    const v = vec3(0, 1, 2);

    const { x, y, z, r, g, b, s, t, p } = v;
    expect(x).toBe(0);
    expect(y).toBe(1);
    expect(z).toBe(2);
    expect(r).toBe(0);
    expect(g).toBe(1);
    expect(b).toBe(2);
    expect(s).toBe(0);
    expect(t).toBe(1);
    expect(p).toBe(2);

    // @ts-ignore
    const [zero, one, two] = v;
    expect(zero).toBe(0);
    expect(one).toBe(1);
    expect(two).toBe(2);

    const { xxx, ggg, ppp } = v;
    expect(xxx.x).toBe(0);
    expect(xxx.y).toBe(0);
    expect(xxx.z).toBe(0);
    expect(ggg.x).toBe(1);
    expect(ggg.y).toBe(1);
    expect(ggg.z).toBe(1);
    expect(ppp.x).toBe(2);
    expect(ppp.y).toBe(2);
    expect(ppp.z).toBe(2);
  });

  test('fill', () => {
    const value = 3;
    const v = vec3(value);
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

      const aValues = [0, 1, 2];
      const bValues = [6, 0, 4];
      const a = vec3(...aValues);
      const b = vec3(...bValues);
      const c = a[op](b);
      for (let i = 0; i < SIZEOF; i++) {
        expect(c[i].toFixed(6)).toBe(mock(aValues[i], bValues[i]).toFixed(6));
      }

      // @ts-ignore
      const cValues = [...c];
      const dValues = [3, 8, 7];
      const d = c[op](...dValues);
      for (let i = 0; i < SIZEOF; i++) {
        expect(d[i].toFixed(6)).toBe(mock(cValues[i], dValues[i]).toFixed(6));
      }
    }),
  );

  test('clone', () => {
    const a = vec3(1, 2, 3);
    const b = vec3(5, 6, 7);
    const c = a.clone().add(b);
    for (let i = 0; i < SIZEOF; i++) {
      expect(c[i] === a[i]).toBe(false);
      expect(c[i] === b[i]).toBe(false);
    }
  });
});