import { weakRandomString } from '../random';

describe('weakRandomString', () => {
  it('generates random strings', () => {
    expect(weakRandomString(5)).not.toBe(weakRandomString(5));
  });

  it('generate string with given length', () => {
    expect(weakRandomString(4)).toHaveLength(4);
    expect(weakRandomString(7)).toHaveLength(7);
  });

  it('throws error if given length >= 10', () => {
    expect(() => weakRandomString(10)).toThrow();
    expect(() => weakRandomString(20)).toThrow();
  });
});
