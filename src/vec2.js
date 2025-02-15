const SIZEOF = 2;

const INDEX_DICT = {
  0: 'x', 1: 'y',
  x: 0, y: 1,
  r: 0, g: 1,
  s: 0, t: 1,
};

class Vec2 {
  #values;

  constructor(values) {
    this.#values = values;
  }

  getPattern(pattern) {
    if (pattern.length === 1) return this.#values[INDEX_DICT[pattern[0]]];

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
        return;
      }

      case 'object': {
        if (value !== null) {
          const applyKeys = (keys) => {
            const objValues = [];
            for (let i = 0; i < SIZEOF; i++) {
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

          if (applyKeys('xy')) return;
          if (applyKeys('01')) return;
          if (applyKeys('rg')) return;
          if (applyKeys('st')) return;
        }
        break;
      }
    }

    throw Error(`Vec2 error: cannot set "${JSON.stringify(value, null, 2)}" to ${pattern}!`);
  }
}

(() => {
  const dicts = [
    ['', 'x', 'y'],
    ['', 'r', 'g'],
    ['', 's', 't'],
  ];
  const dictsCount = dicts.length;
  const dictLength = dicts[0].length;

  // Iterable 0..(SIZEOF - 1)
  for (let i = 0; i < SIZEOF; i++) {
    const key = 'xy'[i];
    Object.defineProperty(Vec2.prototype, i, {
      get() { return this.getPattern(key) },
      set(value) { this.setPattern(key, value) },
    });
  }
  Vec2.prototype[Symbol.iterator] = function*() {
    for (let i = 0; i < SIZEOF; i++) yield this[i];
  };

  // Other get/set x, stq, arbr, etc...
  for (let d = 0; d < dictsCount; d++) {
    const dict = dicts[d];
    for (let y = 0; y < dictLength; y++) {
      for (let x = 0; x < dictLength; x++) {
        const key = [dict[x], dict[y]].join('');
        if (key === '') continue;
        if (!(key in Vec2.prototype)) {
          Object.defineProperty(Vec2.prototype, key, {
            get() { return this.getPattern(key) },
            set(value) { this.setPattern(key, value) },
          });
        }
      }
    }
  }
})();

export const vec2 = (...args) => {
  const makeError = (message) => { throw Error(`vec2 error: ${message}`) };

  if (args.length > SIZEOF) {
    makeError(`max args count is ${SIZEOF}, but ${args.length} args provided!`);
  }

  const values = new Float32Array(SIZEOF);
  if (args.length === 0) {
    return new Vec2(values.fill(0, 0, SIZEOF));
  }
  if (args.length === 1 && typeof args[0] === 'number') {
    return new Vec2(values.fill(args[0], 0, SIZEOF));
  }

  let valuesCount = 0;

  const applyKeys = (keys, obj) => {
    for (let i = 0; i < SIZEOF; i++) {
      const value = obj[keys[i]];
      if (typeof value === 'number') {
        values[valuesCount++] = value;
        if (valuesCount === SIZEOF) return true;
      } else {
        return i !== 0;
      }
    }
  };

  const argsCount = args.length;
  for (let i = 0; i < argsCount && valuesCount !== SIZEOF; i++) {
    const arg = args[i];
    switch (typeof arg) {
      case 'number': {
        values[valuesCount++] = arg;
        continue;
      }
      case 'object': {
        if (arg !== null) {
          if (applyKeys('xy', arg)) continue;
          if (applyKeys('01', arg)) continue;
          if (applyKeys('rg', arg)) continue;
          if (applyKeys('st', arg)) continue;
        }
      }
    }

    makeError(`invalid arguments[${i}] = ${JSON.stringify(arg, null, 2)}`)
  }

  if (valuesCount !== SIZEOF) {
    makeError(`${SIZEOF} values required, but ${valuesCount} provided!`);
  }

  return new Vec2(values);
};