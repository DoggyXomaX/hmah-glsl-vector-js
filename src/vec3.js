const INDEX_DICT = {
  0: 'x', 1: 'y', 2: 'z',
  x: 0, y: 1, z: 2,
  r: 0, g: 1, b: 2,
  s: 0, t: 1, p: 2,
};

class Vec3 {
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
            for (let i = 0; i < 3; i++) {
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

          if (applyKeys('xyz')) break;
          if (applyKeys('012')) break;
          if (applyKeys('rgb')) break;
          if (applyKeys('stp')) break;
        }
      }

      default: throw Error(`Vec3 error: cannot set "${JSON.stringify(value, null, 2)}" to ${pattern}!`);
    }
  }
}

(() => {
  const dicts = [
    ['', 'x', 'y', 'z'],
    ['', 'r', 'g', 'b'],
    ['', 's', 't', 'p'],
  ];
  const dictsCount = dicts.length;

  // Iterable 0..2
  for (let i = 0; i < 3; i++) {
    Object.defineProperty(Vec3.prototype, i, {
      get() { return this.getPattern('xyz'[i]) },
      set(value) { this.setPattern('xyz'[i], value) },
    });
  }

  // Other get/set x, stq, arbr, etc...
  for (let d = 0; d < dictsCount; d++) {
    const dict = dicts[d];
    for (let z = 0; z < 4; z++) {
      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          const key = [dict[x], dict[y], dict[z]].join('');
          if (key === '') continue;
          if (!(key in Vec3.prototype)) {
            Object.defineProperty(Vec3.prototype, key, {
              get() { return this.getPattern(key) },
              set(value) { this.setPattern(key, value) },
            });
          }
        }
      }
    }
  }
})();

const vec3 = (...args) => {
  if (args.length > 3) {
    throw Error(`vec3 error: max args count is 3, but ${args.length} args provided!`);
  }

  const values = new Float32Array(3);
  let valuesCount = 0;

  const applyKeys = (keys, obj) => {
    for (let i = 0; i < 3; i++) {
      const value = obj[keys[i]];
      if (typeof value === 'number') {
        values[valuesCount++] = value;
        if (valuesCount === 3) return true;
      } else {
        return i !== 0;
      }
    }
  };

  const argsCount = args.length;
  for (let i = 0; i < argsCount && valuesCount !== 3; i++) {
    const arg = args[i];
    switch (typeof arg) {
      case 'number': {
        values[valuesCount++] = arg;
        continue;
      }
      case 'object': {
        if (arg !== null) {
          if (applyKeys('xyz', arg)) continue;
          if (applyKeys('012', arg)) continue;
          if (applyKeys('rgb', arg)) continue;
          if (applyKeys('stp', arg)) continue;
        }
      }
    }

    throw Error(`vec3 error: invalid arguments[${i}] = ${JSON.stringify(arg, null, 2)}`);
  }

  if (valuesCount !== 3) throw Error(`vec3 error: 3 values required, but ${valuesCount} provided!`);

  return new Vec3(values);
};

export { vec3 };