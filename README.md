# GLSL Vector implementation in JavaScript!

[
![](https://img.shields.io/badge/hmah--glsl--vector--js-npm-red)
](
https://www.npmjs.com/package/hmah-glsl-vector-js
)

## Usage
```ts
import { vec4, vec3, vec2 } from 'hmah-glsl-vector-js';

const raw = vec3(0, 1, 2);

const array = vec4([0, 1, 2, 3]);

const v1 = vec4({ x: 0, y: 1, z: 2, w: 3 });
const [x, y, z, w] = v1;

const colorRGBA = vec3({ r: 1, g: 0, b: 0, a: 1 });
const outputColor = vec4(colorRGBA.bgr, 1);

const textureCoord = vec2({ s: 0, t: 0 });

const a = vec4(1, 2, 3, 4);
const b = vec4(4, 5, 6, 7);
const c = a.clone().add(b); // new Vec4 with 5, 7, 9, 11 values
const d = a.add(b); // pointer to the modified a with 5, 7, 9, 11 values
```

## TODO
* [x] Initialization
* [x] Clone
* [x] Add/Sub/Mul/Div/Mod
* [ ] Equals
* [ ] Cross/Dot ?
* [ ] Complex tests

## License

MIT