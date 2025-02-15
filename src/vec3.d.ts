import { AnyRaw2, AnyRaw3, RawVec2, RawVec3 } from './raw';

export class Vec3 {
  private constructor(values: Float32Array);

  public get xxx(): RawVec3;
  public get xxy(): RawVec3;
  public get xxz(): RawVec3;
  public get xyx(): RawVec3;
  public get xyy(): RawVec3;
  public get xyz(): RawVec3;
  public get xzx(): RawVec3;
  public get xzy(): RawVec3;
  public get xzz(): RawVec3;
  public get yxx(): RawVec3;
  public get yxy(): RawVec3;
  public get yxz(): RawVec3;
  public get yyx(): RawVec3;
  public get yyy(): RawVec3;
  public get yyz(): RawVec3;
  public get yzx(): RawVec3;
  public get yzy(): RawVec3;
  public get yzz(): RawVec3;
  public get zxx(): RawVec3;
  public get zxy(): RawVec3;
  public get zxz(): RawVec3;
  public get zyx(): RawVec3;
  public get zyy(): RawVec3;
  public get zyz(): RawVec3;
  public get zzx(): RawVec3;
  public get zzy(): RawVec3;
  public get zzz(): RawVec3;

  public get rrr(): RawVec3;
  public get rrg(): RawVec3;
  public get rrb(): RawVec3;
  public get rgr(): RawVec3;
  public get rgg(): RawVec3;
  public get rgb(): RawVec3;
  public get rbr(): RawVec3;
  public get rbg(): RawVec3;
  public get rbb(): RawVec3;
  public get grr(): RawVec3;
  public get grg(): RawVec3;
  public get grb(): RawVec3;
  public get ggr(): RawVec3;
  public get ggg(): RawVec3;
  public get ggb(): RawVec3;
  public get gbr(): RawVec3;
  public get gbg(): RawVec3;
  public get gbb(): RawVec3;
  public get brr(): RawVec3;
  public get brg(): RawVec3;
  public get brb(): RawVec3;
  public get bgr(): RawVec3;
  public get bgg(): RawVec3;
  public get bgb(): RawVec3;
  public get bbr(): RawVec3;
  public get bbg(): RawVec3;
  public get bbb(): RawVec3;

  public get sss(): RawVec3;
  public get sst(): RawVec3;
  public get ssp(): RawVec3;
  public get sts(): RawVec3;
  public get stt(): RawVec3;
  public get stp(): RawVec3;
  public get sps(): RawVec3;
  public get spt(): RawVec3;
  public get spp(): RawVec3;
  public get tss(): RawVec3;
  public get tst(): RawVec3;
  public get tsp(): RawVec3;
  public get tts(): RawVec3;
  public get ttt(): RawVec3;
  public get ttp(): RawVec3;
  public get tps(): RawVec3;
  public get tpt(): RawVec3;
  public get tpp(): RawVec3;
  public get pss(): RawVec3;
  public get pst(): RawVec3;
  public get psp(): RawVec3;
  public get pts(): RawVec3;
  public get ptt(): RawVec3;
  public get ptp(): RawVec3;
  public get pps(): RawVec3;
  public get ppt(): RawVec3;
  public get ppp(): RawVec3;

  public get xx(): RawVec2;
  public get xy(): RawVec2;
  public get xz(): RawVec2;
  public get yx(): RawVec2;
  public get yy(): RawVec2;
  public get yz(): RawVec2;
  public get zx(): RawVec2;
  public get zy(): RawVec2;
  public get zz(): RawVec2;

  public get rr(): RawVec2;
  public get rg(): RawVec2;
  public get rb(): RawVec2;
  public get gr(): RawVec2;
  public get gg(): RawVec2;
  public get gb(): RawVec2;
  public get br(): RawVec2;
  public get bg(): RawVec2;
  public get bb(): RawVec2;

  public get ss(): RawVec2;
  public get st(): RawVec2;
  public get sp(): RawVec2;
  public get ts(): RawVec2;
  public get tt(): RawVec2;
  public get tp(): RawVec2;
  public get ps(): RawVec2;
  public get pt(): RawVec2;
  public get pp(): RawVec2;

  public get x(): number;
  public get y(): number;
  public get z(): number;

  public get r(): number;
  public get g(): number;
  public get b(): number;

  public get s(): number;
  public get t(): number;
  public get p(): number;

  public get 0(): number;
  public get 1(): number;
  public get 2(): number;
}

export function vec3(...args: (AnyRaw3 | AnyRaw2 | number)[]): Vec3;