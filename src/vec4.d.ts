import { RawVec4, RawVec3, RawVec2, AnyRaw4, AnyRaw3, AnyRaw2 } from './raw';

export class Vec4 {
  private constructor(values: Float32Array);

  public add(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec4;
  public sub(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec4;
  public mul(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec4;
  public div(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec4;
  public mod(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec4;

  public clone(): Vec4;

  public xxxx: RawVec4;
  public xxxy: RawVec4;
  public xxxz: RawVec4;
  public xxxw: RawVec4;
  public xxyx: RawVec4;
  public xxyy: RawVec4;
  public xxyz: RawVec4;
  public xxyw: RawVec4;
  public xxzx: RawVec4;
  public xxzy: RawVec4;
  public xxzz: RawVec4;
  public xxzw: RawVec4;
  public xxwx: RawVec4;
  public xxwy: RawVec4;
  public xxwz: RawVec4;
  public xxww: RawVec4;
  public xyxx: RawVec4;
  public xyxy: RawVec4;
  public xyxz: RawVec4;
  public xyxw: RawVec4;
  public xyyx: RawVec4;
  public xyyy: RawVec4;
  public xyyz: RawVec4;
  public xyyw: RawVec4;
  public xyzx: RawVec4;
  public xyzy: RawVec4;
  public xyzz: RawVec4;
  public xyzw: RawVec4;
  public xywx: RawVec4;
  public xywy: RawVec4;
  public xywz: RawVec4;
  public xyww: RawVec4;
  public xzxx: RawVec4;
  public xzxy: RawVec4;
  public xzxz: RawVec4;
  public xzxw: RawVec4;
  public xzyx: RawVec4;
  public xzyy: RawVec4;
  public xzyz: RawVec4;
  public xzyw: RawVec4;
  public xzzx: RawVec4;
  public xzzy: RawVec4;
  public xzzz: RawVec4;
  public xzzw: RawVec4;
  public xzwx: RawVec4;
  public xzwy: RawVec4;
  public xzwz: RawVec4;
  public xzww: RawVec4;
  public xwxx: RawVec4;
  public xwxy: RawVec4;
  public xwxz: RawVec4;
  public xwxw: RawVec4;
  public xwyx: RawVec4;
  public xwyy: RawVec4;
  public xwyz: RawVec4;
  public xwyw: RawVec4;
  public xwzx: RawVec4;
  public xwzy: RawVec4;
  public xwzz: RawVec4;
  public xwzw: RawVec4;
  public xwwx: RawVec4;
  public xwwy: RawVec4;
  public xwwz: RawVec4;
  public xwww: RawVec4;
  public yxxx: RawVec4;
  public yxxy: RawVec4;
  public yxxz: RawVec4;
  public yxxw: RawVec4;
  public yxyx: RawVec4;
  public yxyy: RawVec4;
  public yxyz: RawVec4;
  public yxyw: RawVec4;
  public yxzx: RawVec4;
  public yxzy: RawVec4;
  public yxzz: RawVec4;
  public yxzw: RawVec4;
  public yxwx: RawVec4;
  public yxwy: RawVec4;
  public yxwz: RawVec4;
  public yxww: RawVec4;
  public yyxx: RawVec4;
  public yyxy: RawVec4;
  public yyxz: RawVec4;
  public yyxw: RawVec4;
  public yyyx: RawVec4;
  public yyyy: RawVec4;
  public yyyz: RawVec4;
  public yyyw: RawVec4;
  public yyzx: RawVec4;
  public yyzy: RawVec4;
  public yyzz: RawVec4;
  public yyzw: RawVec4;
  public yywx: RawVec4;
  public yywy: RawVec4;
  public yywz: RawVec4;
  public yyww: RawVec4;
  public yzxx: RawVec4;
  public yzxy: RawVec4;
  public yzxz: RawVec4;
  public yzxw: RawVec4;
  public yzyx: RawVec4;
  public yzyy: RawVec4;
  public yzyz: RawVec4;
  public yzyw: RawVec4;
  public yzzx: RawVec4;
  public yzzy: RawVec4;
  public yzzz: RawVec4;
  public yzzw: RawVec4;
  public yzwx: RawVec4;
  public yzwy: RawVec4;
  public yzwz: RawVec4;
  public yzww: RawVec4;
  public ywxx: RawVec4;
  public ywxy: RawVec4;
  public ywxz: RawVec4;
  public ywxw: RawVec4;
  public ywyx: RawVec4;
  public ywyy: RawVec4;
  public ywyz: RawVec4;
  public ywyw: RawVec4;
  public ywzx: RawVec4;
  public ywzy: RawVec4;
  public ywzz: RawVec4;
  public ywzw: RawVec4;
  public ywwx: RawVec4;
  public ywwy: RawVec4;
  public ywwz: RawVec4;
  public ywww: RawVec4;
  public zxxx: RawVec4;
  public zxxy: RawVec4;
  public zxxz: RawVec4;
  public zxxw: RawVec4;
  public zxyx: RawVec4;
  public zxyy: RawVec4;
  public zxyz: RawVec4;
  public zxyw: RawVec4;
  public zxzx: RawVec4;
  public zxzy: RawVec4;
  public zxzz: RawVec4;
  public zxzw: RawVec4;
  public zxwx: RawVec4;
  public zxwy: RawVec4;
  public zxwz: RawVec4;
  public zxww: RawVec4;
  public zyxx: RawVec4;
  public zyxy: RawVec4;
  public zyxz: RawVec4;
  public zyxw: RawVec4;
  public zyyx: RawVec4;
  public zyyy: RawVec4;
  public zyyz: RawVec4;
  public zyyw: RawVec4;
  public zyzx: RawVec4;
  public zyzy: RawVec4;
  public zyzz: RawVec4;
  public zyzw: RawVec4;
  public zywx: RawVec4;
  public zywy: RawVec4;
  public zywz: RawVec4;
  public zyww: RawVec4;
  public zzxx: RawVec4;
  public zzxy: RawVec4;
  public zzxz: RawVec4;
  public zzxw: RawVec4;
  public zzyx: RawVec4;
  public zzyy: RawVec4;
  public zzyz: RawVec4;
  public zzyw: RawVec4;
  public zzzx: RawVec4;
  public zzzy: RawVec4;
  public zzzz: RawVec4;
  public zzzw: RawVec4;
  public zzwx: RawVec4;
  public zzwy: RawVec4;
  public zzwz: RawVec4;
  public zzww: RawVec4;
  public zwxx: RawVec4;
  public zwxy: RawVec4;
  public zwxz: RawVec4;
  public zwxw: RawVec4;
  public zwyx: RawVec4;
  public zwyy: RawVec4;
  public zwyz: RawVec4;
  public zwyw: RawVec4;
  public zwzx: RawVec4;
  public zwzy: RawVec4;
  public zwzz: RawVec4;
  public zwzw: RawVec4;
  public zwwx: RawVec4;
  public zwwy: RawVec4;
  public zwwz: RawVec4;
  public zwww: RawVec4;
  public wxxx: RawVec4;
  public wxxy: RawVec4;
  public wxxz: RawVec4;
  public wxxw: RawVec4;
  public wxyx: RawVec4;
  public wxyy: RawVec4;
  public wxyz: RawVec4;
  public wxyw: RawVec4;
  public wxzx: RawVec4;
  public wxzy: RawVec4;
  public wxzz: RawVec4;
  public wxzw: RawVec4;
  public wxwx: RawVec4;
  public wxwy: RawVec4;
  public wxwz: RawVec4;
  public wxww: RawVec4;
  public wyxx: RawVec4;
  public wyxy: RawVec4;
  public wyxz: RawVec4;
  public wyxw: RawVec4;
  public wyyx: RawVec4;
  public wyyy: RawVec4;
  public wyyz: RawVec4;
  public wyyw: RawVec4;
  public wyzx: RawVec4;
  public wyzy: RawVec4;
  public wyzz: RawVec4;
  public wyzw: RawVec4;
  public wywx: RawVec4;
  public wywy: RawVec4;
  public wywz: RawVec4;
  public wyww: RawVec4;
  public wzxx: RawVec4;
  public wzxy: RawVec4;
  public wzxz: RawVec4;
  public wzxw: RawVec4;
  public wzyx: RawVec4;
  public wzyy: RawVec4;
  public wzyz: RawVec4;
  public wzyw: RawVec4;
  public wzzx: RawVec4;
  public wzzy: RawVec4;
  public wzzz: RawVec4;
  public wzzw: RawVec4;
  public wzwx: RawVec4;
  public wzwy: RawVec4;
  public wzwz: RawVec4;
  public wzww: RawVec4;
  public wwxx: RawVec4;
  public wwxy: RawVec4;
  public wwxz: RawVec4;
  public wwxw: RawVec4;
  public wwyx: RawVec4;
  public wwyy: RawVec4;
  public wwyz: RawVec4;
  public wwyw: RawVec4;
  public wwzx: RawVec4;
  public wwzy: RawVec4;
  public wwzz: RawVec4;
  public wwzw: RawVec4;
  public wwwx: RawVec4;
  public wwwy: RawVec4;
  public wwwz: RawVec4;
  public wwww: RawVec4;

  public rrrr: RawVec4;
  public rrrg: RawVec4;
  public rrrb: RawVec4;
  public rrra: RawVec4;
  public rrgr: RawVec4;
  public rrgg: RawVec4;
  public rrgb: RawVec4;
  public rrga: RawVec4;
  public rrbr: RawVec4;
  public rrbg: RawVec4;
  public rrbb: RawVec4;
  public rrba: RawVec4;
  public rrar: RawVec4;
  public rrag: RawVec4;
  public rrab: RawVec4;
  public rraa: RawVec4;
  public rgrr: RawVec4;
  public rgrg: RawVec4;
  public rgrb: RawVec4;
  public rgra: RawVec4;
  public rggr: RawVec4;
  public rggg: RawVec4;
  public rggb: RawVec4;
  public rgga: RawVec4;
  public rgbr: RawVec4;
  public rgbg: RawVec4;
  public rgbb: RawVec4;
  public rgba: RawVec4;
  public rgar: RawVec4;
  public rgag: RawVec4;
  public rgab: RawVec4;
  public rgaa: RawVec4;
  public rbrr: RawVec4;
  public rbrg: RawVec4;
  public rbrb: RawVec4;
  public rbra: RawVec4;
  public rbgr: RawVec4;
  public rbgg: RawVec4;
  public rbgb: RawVec4;
  public rbga: RawVec4;
  public rbbr: RawVec4;
  public rbbg: RawVec4;
  public rbbb: RawVec4;
  public rbba: RawVec4;
  public rbar: RawVec4;
  public rbag: RawVec4;
  public rbab: RawVec4;
  public rbaa: RawVec4;
  public rarr: RawVec4;
  public rarg: RawVec4;
  public rarb: RawVec4;
  public rara: RawVec4;
  public ragr: RawVec4;
  public ragg: RawVec4;
  public ragb: RawVec4;
  public raga: RawVec4;
  public rabr: RawVec4;
  public rabg: RawVec4;
  public rabb: RawVec4;
  public raba: RawVec4;
  public raar: RawVec4;
  public raag: RawVec4;
  public raab: RawVec4;
  public raaa: RawVec4;
  public grrr: RawVec4;
  public grrg: RawVec4;
  public grrb: RawVec4;
  public grra: RawVec4;
  public grgr: RawVec4;
  public grgg: RawVec4;
  public grgb: RawVec4;
  public grga: RawVec4;
  public grbr: RawVec4;
  public grbg: RawVec4;
  public grbb: RawVec4;
  public grba: RawVec4;
  public grar: RawVec4;
  public grag: RawVec4;
  public grab: RawVec4;
  public graa: RawVec4;
  public ggrr: RawVec4;
  public ggrg: RawVec4;
  public ggrb: RawVec4;
  public ggra: RawVec4;
  public gggr: RawVec4;
  public gggg: RawVec4;
  public gggb: RawVec4;
  public ggga: RawVec4;
  public ggbr: RawVec4;
  public ggbg: RawVec4;
  public ggbb: RawVec4;
  public ggba: RawVec4;
  public ggar: RawVec4;
  public ggag: RawVec4;
  public ggab: RawVec4;
  public ggaa: RawVec4;
  public gbrr: RawVec4;
  public gbrg: RawVec4;
  public gbrb: RawVec4;
  public gbra: RawVec4;
  public gbgr: RawVec4;
  public gbgg: RawVec4;
  public gbgb: RawVec4;
  public gbga: RawVec4;
  public gbbr: RawVec4;
  public gbbg: RawVec4;
  public gbbb: RawVec4;
  public gbba: RawVec4;
  public gbar: RawVec4;
  public gbag: RawVec4;
  public gbab: RawVec4;
  public gbaa: RawVec4;
  public garr: RawVec4;
  public garg: RawVec4;
  public garb: RawVec4;
  public gara: RawVec4;
  public gagr: RawVec4;
  public gagg: RawVec4;
  public gagb: RawVec4;
  public gaga: RawVec4;
  public gabr: RawVec4;
  public gabg: RawVec4;
  public gabb: RawVec4;
  public gaba: RawVec4;
  public gaar: RawVec4;
  public gaag: RawVec4;
  public gaab: RawVec4;
  public gaaa: RawVec4;
  public brrr: RawVec4;
  public brrg: RawVec4;
  public brrb: RawVec4;
  public brra: RawVec4;
  public brgr: RawVec4;
  public brgg: RawVec4;
  public brgb: RawVec4;
  public brga: RawVec4;
  public brbr: RawVec4;
  public brbg: RawVec4;
  public brbb: RawVec4;
  public brba: RawVec4;
  public brar: RawVec4;
  public brag: RawVec4;
  public brab: RawVec4;
  public braa: RawVec4;
  public bgrr: RawVec4;
  public bgrg: RawVec4;
  public bgrb: RawVec4;
  public bgra: RawVec4;
  public bggr: RawVec4;
  public bggg: RawVec4;
  public bggb: RawVec4;
  public bgga: RawVec4;
  public bgbr: RawVec4;
  public bgbg: RawVec4;
  public bgbb: RawVec4;
  public bgba: RawVec4;
  public bgar: RawVec4;
  public bgag: RawVec4;
  public bgab: RawVec4;
  public bgaa: RawVec4;
  public bbrr: RawVec4;
  public bbrg: RawVec4;
  public bbrb: RawVec4;
  public bbra: RawVec4;
  public bbgr: RawVec4;
  public bbgg: RawVec4;
  public bbgb: RawVec4;
  public bbga: RawVec4;
  public bbbr: RawVec4;
  public bbbg: RawVec4;
  public bbbb: RawVec4;
  public bbba: RawVec4;
  public bbar: RawVec4;
  public bbag: RawVec4;
  public bbab: RawVec4;
  public bbaa: RawVec4;
  public barr: RawVec4;
  public barg: RawVec4;
  public barb: RawVec4;
  public bara: RawVec4;
  public bagr: RawVec4;
  public bagg: RawVec4;
  public bagb: RawVec4;
  public baga: RawVec4;
  public babr: RawVec4;
  public babg: RawVec4;
  public babb: RawVec4;
  public baba: RawVec4;
  public baar: RawVec4;
  public baag: RawVec4;
  public baab: RawVec4;
  public baaa: RawVec4;
  public arrr: RawVec4;
  public arrg: RawVec4;
  public arrb: RawVec4;
  public arra: RawVec4;
  public argr: RawVec4;
  public argg: RawVec4;
  public argb: RawVec4;
  public arga: RawVec4;
  public arbr: RawVec4;
  public arbg: RawVec4;
  public arbb: RawVec4;
  public arba: RawVec4;
  public arar: RawVec4;
  public arag: RawVec4;
  public arab: RawVec4;
  public araa: RawVec4;
  public agrr: RawVec4;
  public agrg: RawVec4;
  public agrb: RawVec4;
  public agra: RawVec4;
  public aggr: RawVec4;
  public aggg: RawVec4;
  public aggb: RawVec4;
  public agga: RawVec4;
  public agbr: RawVec4;
  public agbg: RawVec4;
  public agbb: RawVec4;
  public agba: RawVec4;
  public agar: RawVec4;
  public agag: RawVec4;
  public agab: RawVec4;
  public agaa: RawVec4;
  public abrr: RawVec4;
  public abrg: RawVec4;
  public abrb: RawVec4;
  public abra: RawVec4;
  public abgr: RawVec4;
  public abgg: RawVec4;
  public abgb: RawVec4;
  public abga: RawVec4;
  public abbr: RawVec4;
  public abbg: RawVec4;
  public abbb: RawVec4;
  public abba: RawVec4;
  public abar: RawVec4;
  public abag: RawVec4;
  public abab: RawVec4;
  public abaa: RawVec4;
  public aarr: RawVec4;
  public aarg: RawVec4;
  public aarb: RawVec4;
  public aara: RawVec4;
  public aagr: RawVec4;
  public aagg: RawVec4;
  public aagb: RawVec4;
  public aaga: RawVec4;
  public aabr: RawVec4;
  public aabg: RawVec4;
  public aabb: RawVec4;
  public aaba: RawVec4;
  public aaar: RawVec4;
  public aaag: RawVec4;
  public aaab: RawVec4;
  public aaaa: RawVec4;

  public ssss: RawVec4;
  public ssst: RawVec4;
  public sssp: RawVec4;
  public sssq: RawVec4;
  public ssts: RawVec4;
  public sstt: RawVec4;
  public sstp: RawVec4;
  public sstq: RawVec4;
  public ssps: RawVec4;
  public sspt: RawVec4;
  public sspp: RawVec4;
  public sspq: RawVec4;
  public ssqs: RawVec4;
  public ssqt: RawVec4;
  public ssqp: RawVec4;
  public ssqq: RawVec4;
  public stss: RawVec4;
  public stst: RawVec4;
  public stsp: RawVec4;
  public stsq: RawVec4;
  public stts: RawVec4;
  public sttt: RawVec4;
  public sttp: RawVec4;
  public sttq: RawVec4;
  public stps: RawVec4;
  public stpt: RawVec4;
  public stpp: RawVec4;
  public stpq: RawVec4;
  public stqs: RawVec4;
  public stqt: RawVec4;
  public stqp: RawVec4;
  public stqq: RawVec4;
  public spss: RawVec4;
  public spst: RawVec4;
  public spsp: RawVec4;
  public spsq: RawVec4;
  public spts: RawVec4;
  public sptt: RawVec4;
  public sptp: RawVec4;
  public sptq: RawVec4;
  public spps: RawVec4;
  public sppt: RawVec4;
  public sppp: RawVec4;
  public sppq: RawVec4;
  public spqs: RawVec4;
  public spqt: RawVec4;
  public spqp: RawVec4;
  public spqq: RawVec4;
  public sqss: RawVec4;
  public sqst: RawVec4;
  public sqsp: RawVec4;
  public sqsq: RawVec4;
  public sqts: RawVec4;
  public sqtt: RawVec4;
  public sqtp: RawVec4;
  public sqtq: RawVec4;
  public sqps: RawVec4;
  public sqpt: RawVec4;
  public sqpp: RawVec4;
  public sqpq: RawVec4;
  public sqqs: RawVec4;
  public sqqt: RawVec4;
  public sqqp: RawVec4;
  public sqqq: RawVec4;
  public tsss: RawVec4;
  public tsst: RawVec4;
  public tssp: RawVec4;
  public tssq: RawVec4;
  public tsts: RawVec4;
  public tstt: RawVec4;
  public tstp: RawVec4;
  public tstq: RawVec4;
  public tsps: RawVec4;
  public tspt: RawVec4;
  public tspp: RawVec4;
  public tspq: RawVec4;
  public tsqs: RawVec4;
  public tsqt: RawVec4;
  public tsqp: RawVec4;
  public tsqq: RawVec4;
  public ttss: RawVec4;
  public ttst: RawVec4;
  public ttsp: RawVec4;
  public ttsq: RawVec4;
  public ttts: RawVec4;
  public tttt: RawVec4;
  public tttp: RawVec4;
  public tttq: RawVec4;
  public ttps: RawVec4;
  public ttpt: RawVec4;
  public ttpp: RawVec4;
  public ttpq: RawVec4;
  public ttqs: RawVec4;
  public ttqt: RawVec4;
  public ttqp: RawVec4;
  public ttqq: RawVec4;
  public tpss: RawVec4;
  public tpst: RawVec4;
  public tpsp: RawVec4;
  public tpsq: RawVec4;
  public tpts: RawVec4;
  public tptt: RawVec4;
  public tptp: RawVec4;
  public tptq: RawVec4;
  public tpps: RawVec4;
  public tppt: RawVec4;
  public tppp: RawVec4;
  public tppq: RawVec4;
  public tpqs: RawVec4;
  public tpqt: RawVec4;
  public tpqp: RawVec4;
  public tpqq: RawVec4;
  public tqss: RawVec4;
  public tqst: RawVec4;
  public tqsp: RawVec4;
  public tqsq: RawVec4;
  public tqts: RawVec4;
  public tqtt: RawVec4;
  public tqtp: RawVec4;
  public tqtq: RawVec4;
  public tqps: RawVec4;
  public tqpt: RawVec4;
  public tqpp: RawVec4;
  public tqpq: RawVec4;
  public tqqs: RawVec4;
  public tqqt: RawVec4;
  public tqqp: RawVec4;
  public tqqq: RawVec4;
  public psss: RawVec4;
  public psst: RawVec4;
  public pssp: RawVec4;
  public pssq: RawVec4;
  public psts: RawVec4;
  public pstt: RawVec4;
  public pstp: RawVec4;
  public pstq: RawVec4;
  public psps: RawVec4;
  public pspt: RawVec4;
  public pspp: RawVec4;
  public pspq: RawVec4;
  public psqs: RawVec4;
  public psqt: RawVec4;
  public psqp: RawVec4;
  public psqq: RawVec4;
  public ptss: RawVec4;
  public ptst: RawVec4;
  public ptsp: RawVec4;
  public ptsq: RawVec4;
  public ptts: RawVec4;
  public pttt: RawVec4;
  public pttp: RawVec4;
  public pttq: RawVec4;
  public ptps: RawVec4;
  public ptpt: RawVec4;
  public ptpp: RawVec4;
  public ptpq: RawVec4;
  public ptqs: RawVec4;
  public ptqt: RawVec4;
  public ptqp: RawVec4;
  public ptqq: RawVec4;
  public ppss: RawVec4;
  public ppst: RawVec4;
  public ppsp: RawVec4;
  public ppsq: RawVec4;
  public ppts: RawVec4;
  public pptt: RawVec4;
  public pptp: RawVec4;
  public pptq: RawVec4;
  public ppps: RawVec4;
  public pppt: RawVec4;
  public pppp: RawVec4;
  public pppq: RawVec4;
  public ppqs: RawVec4;
  public ppqt: RawVec4;
  public ppqp: RawVec4;
  public ppqq: RawVec4;
  public pqss: RawVec4;
  public pqst: RawVec4;
  public pqsp: RawVec4;
  public pqsq: RawVec4;
  public pqts: RawVec4;
  public pqtt: RawVec4;
  public pqtp: RawVec4;
  public pqtq: RawVec4;
  public pqps: RawVec4;
  public pqpt: RawVec4;
  public pqpp: RawVec4;
  public pqpq: RawVec4;
  public pqqs: RawVec4;
  public pqqt: RawVec4;
  public pqqp: RawVec4;
  public pqqq: RawVec4;
  public qsss: RawVec4;
  public qsst: RawVec4;
  public qssp: RawVec4;
  public qssq: RawVec4;
  public qsts: RawVec4;
  public qstt: RawVec4;
  public qstp: RawVec4;
  public qstq: RawVec4;
  public qsps: RawVec4;
  public qspt: RawVec4;
  public qspp: RawVec4;
  public qspq: RawVec4;
  public qsqs: RawVec4;
  public qsqt: RawVec4;
  public qsqp: RawVec4;
  public qsqq: RawVec4;
  public qtss: RawVec4;
  public qtst: RawVec4;
  public qtsp: RawVec4;
  public qtsq: RawVec4;
  public qtts: RawVec4;
  public qttt: RawVec4;
  public qttp: RawVec4;
  public qttq: RawVec4;
  public qtps: RawVec4;
  public qtpt: RawVec4;
  public qtpp: RawVec4;
  public qtpq: RawVec4;
  public qtqs: RawVec4;
  public qtqt: RawVec4;
  public qtqp: RawVec4;
  public qtqq: RawVec4;
  public qpss: RawVec4;
  public qpst: RawVec4;
  public qpsp: RawVec4;
  public qpsq: RawVec4;
  public qpts: RawVec4;
  public qptt: RawVec4;
  public qptp: RawVec4;
  public qptq: RawVec4;
  public qpps: RawVec4;
  public qppt: RawVec4;
  public qppp: RawVec4;
  public qppq: RawVec4;
  public qpqs: RawVec4;
  public qpqt: RawVec4;
  public qpqp: RawVec4;
  public qpqq: RawVec4;
  public qqss: RawVec4;
  public qqst: RawVec4;
  public qqsp: RawVec4;
  public qqsq: RawVec4;
  public qqts: RawVec4;
  public qqtt: RawVec4;
  public qqtp: RawVec4;
  public qqtq: RawVec4;
  public qqps: RawVec4;
  public qqpt: RawVec4;
  public qqpp: RawVec4;
  public qqpq: RawVec4;
  public qqqs: RawVec4;
  public qqqt: RawVec4;
  public qqqp: RawVec4;
  public qqqq: RawVec4;

  public xxx: RawVec3;
  public xxy: RawVec3;
  public xxz: RawVec3;
  public xxw: RawVec3;
  public xyx: RawVec3;
  public xyy: RawVec3;
  public xyz: RawVec3;
  public xyw: RawVec3;
  public xzx: RawVec3;
  public xzy: RawVec3;
  public xzz: RawVec3;
  public xzw: RawVec3;
  public xwx: RawVec3;
  public xwy: RawVec3;
  public xwz: RawVec3;
  public xww: RawVec3;
  public yxx: RawVec3;
  public yxy: RawVec3;
  public yxz: RawVec3;
  public yxw: RawVec3;
  public yyx: RawVec3;
  public yyy: RawVec3;
  public yyz: RawVec3;
  public yyw: RawVec3;
  public yzx: RawVec3;
  public yzy: RawVec3;
  public yzz: RawVec3;
  public yzw: RawVec3;
  public ywx: RawVec3;
  public ywy: RawVec3;
  public ywz: RawVec3;
  public yww: RawVec3;
  public zxx: RawVec3;
  public zxy: RawVec3;
  public zxz: RawVec3;
  public zxw: RawVec3;
  public zyx: RawVec3;
  public zyy: RawVec3;
  public zyz: RawVec3;
  public zyw: RawVec3;
  public zzx: RawVec3;
  public zzy: RawVec3;
  public zzz: RawVec3;
  public zzw: RawVec3;
  public zwx: RawVec3;
  public zwy: RawVec3;
  public zwz: RawVec3;
  public zww: RawVec3;
  public wxx: RawVec3;
  public wxy: RawVec3;
  public wxz: RawVec3;
  public wxw: RawVec3;
  public wyx: RawVec3;
  public wyy: RawVec3;
  public wyz: RawVec3;
  public wyw: RawVec3;
  public wzx: RawVec3;
  public wzy: RawVec3;
  public wzz: RawVec3;
  public wzw: RawVec3;
  public wwx: RawVec3;
  public wwy: RawVec3;
  public wwz: RawVec3;
  public www: RawVec3;

  public rrr: RawVec3;
  public rrg: RawVec3;
  public rrb: RawVec3;
  public rra: RawVec3;
  public rgr: RawVec3;
  public rgg: RawVec3;
  public rgb: RawVec3;
  public rga: RawVec3;
  public rbr: RawVec3;
  public rbg: RawVec3;
  public rbb: RawVec3;
  public rba: RawVec3;
  public rar: RawVec3;
  public rag: RawVec3;
  public rab: RawVec3;
  public raa: RawVec3;
  public grr: RawVec3;
  public grg: RawVec3;
  public grb: RawVec3;
  public gra: RawVec3;
  public ggr: RawVec3;
  public ggg: RawVec3;
  public ggb: RawVec3;
  public gga: RawVec3;
  public gbr: RawVec3;
  public gbg: RawVec3;
  public gbb: RawVec3;
  public gba: RawVec3;
  public gar: RawVec3;
  public gag: RawVec3;
  public gab: RawVec3;
  public gaa: RawVec3;
  public brr: RawVec3;
  public brg: RawVec3;
  public brb: RawVec3;
  public bra: RawVec3;
  public bgr: RawVec3;
  public bgg: RawVec3;
  public bgb: RawVec3;
  public bga: RawVec3;
  public bbr: RawVec3;
  public bbg: RawVec3;
  public bbb: RawVec3;
  public bba: RawVec3;
  public bar: RawVec3;
  public bag: RawVec3;
  public bab: RawVec3;
  public baa: RawVec3;
  public arr: RawVec3;
  public arg: RawVec3;
  public arb: RawVec3;
  public ara: RawVec3;
  public agr: RawVec3;
  public agg: RawVec3;
  public agb: RawVec3;
  public aga: RawVec3;
  public abr: RawVec3;
  public abg: RawVec3;
  public abb: RawVec3;
  public aba: RawVec3;
  public aar: RawVec3;
  public aag: RawVec3;
  public aab: RawVec3;
  public aaa: RawVec3;

  public sss: RawVec3;
  public sst: RawVec3;
  public ssp: RawVec3;
  public ssq: RawVec3;
  public sts: RawVec3;
  public stt: RawVec3;
  public stp: RawVec3;
  public stq: RawVec3;
  public sps: RawVec3;
  public spt: RawVec3;
  public spp: RawVec3;
  public spq: RawVec3;
  public sqs: RawVec3;
  public sqt: RawVec3;
  public sqp: RawVec3;
  public sqq: RawVec3;
  public tss: RawVec3;
  public tst: RawVec3;
  public tsp: RawVec3;
  public tsq: RawVec3;
  public tts: RawVec3;
  public ttt: RawVec3;
  public ttp: RawVec3;
  public ttq: RawVec3;
  public tps: RawVec3;
  public tpt: RawVec3;
  public tpp: RawVec3;
  public tpq: RawVec3;
  public tqs: RawVec3;
  public tqt: RawVec3;
  public tqp: RawVec3;
  public tqq: RawVec3;
  public pss: RawVec3;
  public pst: RawVec3;
  public psp: RawVec3;
  public psq: RawVec3;
  public pts: RawVec3;
  public ptt: RawVec3;
  public ptp: RawVec3;
  public ptq: RawVec3;
  public pps: RawVec3;
  public ppt: RawVec3;
  public ppp: RawVec3;
  public ppq: RawVec3;
  public pqs: RawVec3;
  public pqt: RawVec3;
  public pqp: RawVec3;
  public pqq: RawVec3;
  public qss: RawVec3;
  public qst: RawVec3;
  public qsp: RawVec3;
  public qsq: RawVec3;
  public qts: RawVec3;
  public qtt: RawVec3;
  public qtp: RawVec3;
  public qtq: RawVec3;
  public qps: RawVec3;
  public qpt: RawVec3;
  public qpp: RawVec3;
  public qpq: RawVec3;
  public qqs: RawVec3;
  public qqt: RawVec3;
  public qqp: RawVec3;
  public qqq: RawVec3;

  public xx: RawVec2;
  public xy: RawVec2;
  public xz: RawVec2;
  public xw: RawVec2;
  public yx: RawVec2;
  public yy: RawVec2;
  public yz: RawVec2;
  public yw: RawVec2;
  public zx: RawVec2;
  public zy: RawVec2;
  public zz: RawVec2;
  public zw: RawVec2;
  public wx: RawVec2;
  public wy: RawVec2;
  public wz: RawVec2;
  public ww: RawVec2;

  public rr: RawVec2;
  public rg: RawVec2;
  public rb: RawVec2;
  public ra: RawVec2;
  public gr: RawVec2;
  public gg: RawVec2;
  public gb: RawVec2;
  public ga: RawVec2;
  public br: RawVec2;
  public bg: RawVec2;
  public bb: RawVec2;
  public ba: RawVec2;
  public ar: RawVec2;
  public ag: RawVec2;
  public ab: RawVec2;
  public aa: RawVec2;

  public ss: RawVec2;
  public st: RawVec2;
  public sp: RawVec2;
  public sq: RawVec2;
  public ts: RawVec2;
  public tt: RawVec2;
  public tp: RawVec2;
  public tq: RawVec2;
  public ps: RawVec2;
  public pt: RawVec2;
  public pp: RawVec2;
  public pq: RawVec2;
  public qs: RawVec2;
  public qt: RawVec2;
  public qp: RawVec2;
  public qq: RawVec2;

  public x: number;
  public y: number;
  public z: number;
  public w: number;

  public r: number;
  public g: number;
  public b: number;
  public a: number;

  public s: number;
  public t: number;
  public p: number;
  public q: number;

  public 0: number;
  public 1: number;
  public 2: number;
  public 3: number;
  [Symbol.iterator](): Iterator<number>;
}

export function vec4(...args: (AnyRaw4 | AnyRaw3 | AnyRaw2 | number[] | number)[]): Vec4;