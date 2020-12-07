const Lodash = require('./sync');

//! toEqual = for arrays, obj and mm
//! toBe = for stirng, number, and primitiv values
let _ = new Lodash();

describe('Lodash compact', () => {
  let array;
  beforeEach(() => {
    array = [false, 32, 0, 'hello', '', true, null];
  });
  afterAll(() => {
    _ = new Lodash();
  });

  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });
  test('should remove Falsy value from array', () => {
    const result = [32, 'hello', true];
    expect(_.compact(array)).toEqual(result);
  });

  test('should Not contain falsy values', () => {
    expect(_.compact(array)).not.toContain(false, 0, '', null);
  });
});

describe('Lodash group by', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });
  test('should group array item by Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test('should group array item by length', () => {
    const array = ['one', 'two', 'three'];
    const result = {
      5: ['three'],
      3: ['one', 'two'],
    };
    expect(_.groupBy(array, 'length')).toEqual(result);
  });

  test('should not return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
