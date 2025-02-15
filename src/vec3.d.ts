import { AnyRaw2, AnyRaw3, AnyRaw4, RawVec2, RawVec3 } from './raw';

export class Vec3 {
  private constructor(values: Float32Array);

  public xxx: RawVec3;
  public xxy: RawVec3;
  public xxz: RawVec3;
  public xyx: RawVec3;
  public xyy: RawVec3;
  public xyz: RawVec3;
  public xzx: RawVec3;
  public xzy: RawVec3;
  public xzz: RawVec3;
  public yxx: RawVec3;
  public yxy: RawVec3;
  public yxz: RawVec3;
  public yyx: RawVec3;
  public yyy: RawVec3;
  public yyz: RawVec3;
  public yzx: RawVec3;
  public yzy: RawVec3;
  public yzz: RawVec3;
  public zxx: RawVec3;
  public zxy: RawVec3;
  public zxz: RawVec3;
  public zyx: RawVec3;
  public zyy: RawVec3;
  public zyz: RawVec3;
  public zzx: RawVec3;
  public zzy: RawVec3;
  public zzz: RawVec3;

  public rrr: RawVec3;
  public rrg: RawVec3;
  public rrb: RawVec3;
  public rgr: RawVec3;
  public rgg: RawVec3;
  public rgb: RawVec3;
  public rbr: RawVec3;
  public rbg: RawVec3;
  public rbb: RawVec3;
  public grr: RawVec3;
  public grg: RawVec3;
  public grb: RawVec3;
  public ggr: RawVec3;
  public ggg: RawVec3;
  public ggb: RawVec3;
  public gbr: RawVec3;
  public gbg: RawVec3;
  public gbb: RawVec3;
  public brr: RawVec3;
  public brg: RawVec3;
  public brb: RawVec3;
  public bgr: RawVec3;
  public bgg: RawVec3;
  public bgb: RawVec3;
  public bbr: RawVec3;
  public bbg: RawVec3;
  public bbb: RawVec3;

  public sss: RawVec3;
  public sst: RawVec3;
  public ssp: RawVec3;
  public sts: RawVec3;
  public stt: RawVec3;
  public stp: RawVec3;
  public sps: RawVec3;
  public spt: RawVec3;
  public spp: RawVec3;
  public tss: RawVec3;
  public tst: RawVec3;
  public tsp: RawVec3;
  public tts: RawVec3;
  public ttt: RawVec3;
  public ttp: RawVec3;
  public tps: RawVec3;
  public tpt: RawVec3;
  public tpp: RawVec3;
  public pss: RawVec3;
  public pst: RawVec3;
  public psp: RawVec3;
  public pts: RawVec3;
  public ptt: RawVec3;
  public ptp: RawVec3;
  public pps: RawVec3;
  public ppt: RawVec3;
  public ppp: RawVec3;

  public xx: RawVec2;
  public xy: RawVec2;
  public xz: RawVec2;
  public yx: RawVec2;
  public yy: RawVec2;
  public yz: RawVec2;
  public zx: RawVec2;
  public zy: RawVec2;
  public zz: RawVec2;

  public rr: RawVec2;
  public rg: RawVec2;
  public rb: RawVec2;
  public gr: RawVec2;
  public gg: RawVec2;
  public gb: RawVec2;
  public br: RawVec2;
  public bg: RawVec2;
  public bb: RawVec2;

  public ss: RawVec2;
  public st: RawVec2;
  public sp: RawVec2;
  public ts: RawVec2;
  public tt: RawVec2;
  public tp: RawVec2;
  public ps: RawVec2;
  public pt: RawVec2;
  public pp: RawVec2;

  public x: number;
  public y: number;
  public z: number;

  public r: number;
  public g: number;
  public b: number;

  public s: number;
  public t: number;
  public p: number;

  public 0: number;
  public 1: number;
  public 2: number;
  [Symbol.iterator](): Iterator<number>;
}

export function vec3(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number)[]): Vec3;