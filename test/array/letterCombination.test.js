import letterCombination from "../../code/array/letterCombination";

test("letter combination", () => {
  expect(letterCombination('23')).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
});