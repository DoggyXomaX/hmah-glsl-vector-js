import { describe, test, expect } from 'bun:test';
import { vec3 } from '../src/vec3.js';

describe('vec3 test', () => {
  test('basic test', () => {
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

  test('fill test', () => {
    const value = 3;
    const v = vec3(value);
    for (let i = 0; i < 3; i++) expect(v[i]).toBe(value);
  });
});