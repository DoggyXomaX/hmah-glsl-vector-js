export type RawVec4 = { x: number; y: number; z: number; w: number };
export type RawVec3 = { x: number; y: number; z: number };
export type RawVec2 = { x: number; y: number };
export type RawRgba = { r: number; g: number; b: number; a: number };
export type RawRgb = { r: number; g: number; b: number };
export type RawRg = { r: number; g: number };
export type RawStpq = { s: number; t: number; p: number; q: number };
export type RawStp = { s: number; t: number; p: number };
export type RawSt = { s: number; t: number };
export type Raw0123 = [number, number, number, number];
export type Raw012 = [number, number, number];
export type Raw01 = [number, number];

export type AnyRaw4 = RawVec4 | RawRgba | RawStpq | Raw0123;
export type AnyRaw3 = RawVec3 | RawRgb | RawStp | Raw012;
export type AnyRaw2 = RawVec2 | RawRg | RawSt | Raw01;