function expect(value) {
  return {
    toBe: (exp) => {
      if (value === exp) {
        console.log('success');
      } else {
        console.error(`Value is ${value} but exp is ${exp}`);
      }
    },
  };
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

// expect(sum(42, 13)).toBe(56);

module.exports = { sum, nativeNull };
