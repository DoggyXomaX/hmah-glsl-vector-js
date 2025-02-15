import { AnyRaw2, RawVec2 } from './raw';

export class Vec2 {
  private constructor(values: Float32Array);

  public get xx(): RawVec2;
  public get xy(): RawVec2;
  public get yx(): RawVec2;
  public get yy(): RawVec2;

  public get rr(): RawVec2;
  public get rg(): RawVec2;
  public get gr(): RawVec2;
  public get gg(): RawVec2;

  public get ss(): RawVec2;
  public get st(): RawVec2;
  public get ts(): RawVec2;
  public get tt(): RawVec2;

  public get x(): number;
  public get y(): number;

  public get r(): number;
  public get g(): number;

  public get s(): number;
  public get t(): number;

  public get 0(): number;
  public get 1(): number;
}

export function vec2(...args: (AnyRaw2 | number)[]): Vec2;