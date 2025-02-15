const INDEX_DICT = {
  0: 'x', 1: 'y', 2: 'z', 3: 'w',
  x: 0, y: 1, z: 2, w: 3,
  r: 0, g: 1, b: 2, a: 3,
  s: 0, t: 1, p: 2, q: 3,
};

class Vec4 {
  #values;

  constructor(values) {
    this.#values = values;
  }

  getPattern(pattern) {
    if (pattern.length === 1) return this.#values[INDEX_DICT[pattern[0]]]

    const values = this.#values;
    const patternLength = pattern.length;
    const obj = {};

    for (let i = 0; i < patternLength; i++) {
      const objKey = INDEX_DICT[i];
      const patternKey = pattern[i];
      const valueIndex = INDEX_DICT[patternKey];
      obj[objKey] = values[valueIndex];
    }

    return obj;
  }

  setPattern(pattern, value) {
    const values = this.#values;
    const patternLength = pattern.length;
    switch (typeof value) {
      case 'number': {
        for (let i = 0; i < patternLength; i++) {
          const patternKey = pattern[i];
          const valueIndex = INDEX_DICT[patternKey];
          values[valueIndex] = value;
        }
        break;
      }

      case 'object': {
        if (value !== null) {
          const applyKeys = (keys) => {
            const objValues = [];
            for (let i = 0; i < 4; i++) {
              const key = keys[i];
              const newValue = value[key];
              if (typeof newValue !== 'number') {
                break;
              }

              objValues.push(newValue);
            }

            if (objValues.length < patternLength) {
              return false;
            }

            for (let i = 0; i < patternLength; i++) {
              const objValue = objValues[i];
              const patternKey = pattern[i];
              const valueIndex = INDEX_DICT[patternKey];
              values[valueIndex] = objValue;
            }

            return true;
          };

          if (applyKeys('xyzw')) break;
          if (applyKeys('0123')) break;
          if (applyKeys('rgba')) break;
          if (applyKeys('stpq')) break;
        }
      }

      default: throw Error(`Vec4 error: cannot set "${JSON.stringify(value, null, 2)}" to ${pattern}!`);
    }
  }
}

(() => {
  const dicts = [
    ['', 'x', 'y', 'z', 'w'],
    ['', 'r', 'g', 'b', 'a'],
    ['', 's', 't', 'p', 'q'],
  ];
  const dictsCount = dicts.length;

  // Iterable 0..3
  for (let i = 0; i < 4; i++) {
    Object.defineProperty(Vec4.prototype, i, {
      get() { return this.getPattern('xyzw'[i]) },
      set(value) { this.setPattern('xyzw'[i], value) },
    });
  }

  // Other get/set x, stq, arbr, etc...
  for (let d = 0; d < dictsCount; d++) {
    const dict = dicts[d];
    for (let w = 0; w < 5; w++) {
      for (let z = 0; z < 5; z++) {
        for (let y = 0; y < 5; y++) {
          for (let x = 1; x < 5; x++) {
            const key = [dict[x], dict[y], dict[z], dict[w]].join('');
            if (!(key in Vec4.prototype)) {
              Object.defineProperty(Vec4.prototype, key, {
                get() { return this.getPattern(key) },
                set(value) { this.setPattern(key, value) },
              });
            }
          }
        }
      }
    }
  }
})();

const vec4 = (...args) => {
  if (args.length > 4) {
    throw Error(`vec4 error: max args count is 4, but ${args.length} args provided!`);
  }

  const values = new Float32Array(4);
  let valuesCount = 0;

  const applyKeys = (keys, obj) => {
    for (let i = 0; i < 4; i++) {
      const value = obj[keys[i]];
      if (typeof value === 'number') {
        values[valuesCount++] = value;
        if (valuesCount === 4) return true;
      } else {
        return i !== 0;
      }
    }
  };

  const argsCount = args.length;
  for (let i = 0; i < argsCount && valuesCount !== 4; i++) {
    const arg = args[i];
    switch (typeof arg) {
      case 'number': {
        values[valuesCount++] = arg;
        continue;
      }
      case 'object': {
        if (arg !== null) {
          if (applyKeys('xyzw', arg)) continue;
          if (applyKeys('0123', arg)) continue;
          if (applyKeys('rgba', arg)) continue;
          if (applyKeys('stpq', arg)) continue;
        }
        break;
      }
    }

    throw Error(`vec4 error:  invalid arguments[${i}] = ${JSON.stringify(arg, null, 2)}`);
  }

  if (valuesCount !== 4) throw Error(`vec4 error:  4 values required, but ${valuesCount} provided!`);

  return new Vec4(values);
};

export { vec4 };