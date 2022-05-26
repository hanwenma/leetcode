import matchBraket from "../../code/string/matchBraket";

describe("match braket", () => {
  test('should be true', () => {
    expect(matchBraket('a(b{c[d]e}f)g')).toBe(true)
  });

  test('should be false', () => {
    expect(matchBraket('a(b{c[d]e}f)g]')).toBe(false)
  });
});