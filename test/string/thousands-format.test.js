import { thousandsFormat1, thousandsFormat2 } from "../../code/string/thousands-format";

describe('thousands format', () => {
    const num1 = 10;
    const num2 =  20220607;

    test('test thousands format one', () => {
        expect(thousandsFormat1(num1)).toBe('10');
        expect(thousandsFormat1(num2)).toBe('20,220,607');
    });

    test('test thousands format two', () => {
        expect(thousandsFormat2(num1)).toBe('10');
        expect(thousandsFormat2(num2)).toBe('20,220,607');
    });
});