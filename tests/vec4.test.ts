import { describe, test, expect } from 'bun:test';
import { vec4 } from '../src/vec4.js';

describe('vec4 test', () => {
  test('basic test', () => {
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

  test('fill test', () => {
    const value = 3;
    const v = vec4(value);
    for (let i = 0; i < 4; i++) expect(v[i]).toBe(value);
  });
});