import { AnyRaw2, AnyRaw3, AnyRaw4, RawVec2 } from './raw';

export class Vec2 {
  private constructor(values: Float32Array);

  public add(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec2;
  public sub(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec2;
  public mul(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec2;
  public div(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec2;
  public mod(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec2;

  public clone(): Vec2;

  public xx: RawVec2;
  public xy: RawVec2;
  public yx: RawVec2;
  public yy: RawVec2;

  public rr: RawVec2;
  public rg: RawVec2;
  public gr: RawVec2;
  public gg: RawVec2;

  public ss: RawVec2;
  public st: RawVec2;
  public ts: RawVec2;
  public tt: RawVec2;

  public x: number;
  public y: number;

  public r: number;
  public g: number;

  public s: number;
  public t: number;

  public 0: number;
  public 1: number;
  [Symbol.iterator](): Iterator<number>;
}

export function vec2(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec2;