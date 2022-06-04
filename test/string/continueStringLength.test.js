import {continueStringLength1, continueStringLength2} from "../../code/string/continueStringLength";

describe("continue string length one", () => {
  test('should be {char: e, length: 4}', () => {
    const rs = continueStringLength1('aabbcccddeeee11223');
    expect(rs).toEqual({char: 'e', length: 4})
  });

  test('should be {char: a, length: 1}', () => {
    const rs = continueStringLength1('abcdef');
    expect(rs).toEqual({char: 'a', length: 1});
  });

  test('should be {char: "", length: 0}', () => {
    const rs = continueStringLength1('');
    expect(rs).toEqual({char: "", length: 0})
  });

  test('should be {char: a, length: 4}', () => {
    const rs = continueStringLength1('aaaa');
    expect(rs).toEqual({char: 'a', length: 4})
  });
});


describe("continue string length two", () => {
  test('should be {char: e, length: 4}', () => {
    const rs = continueStringLength2('aabbcccddeeee11223');
    expect(rs).toEqual({char: 'e', length: 4})
  });

  test('should be {char: a, length: 1}', () => {
    const rs = continueStringLength2('abcdef');
    expect(rs).toEqual({char: 'a', length: 1});
  });

  test('should be {char: "", length: 0}', () => {
    const rs = continueStringLength2('');
    expect(rs).toEqual({char: "", length: 0})
  });

  test('should be {char: a, length: 4}', () => {
    const rs = continueStringLength2('aaaa');
    expect(rs).toEqual({char: 'a', length: 4})
  });
});