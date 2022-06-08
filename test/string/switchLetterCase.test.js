import { switchLetterCase } from "../../code/string/switchLetterCase";

describe('switch letter case', () => {
    test('test switchLetterCase', () => {
        expect(switchLetterCase('123ab45CD')).toBe('123AB45cd');
        expect(switchLetterCase('')).toBe('');
        expect(switchLetterCase('12345')).toBe('12345');
    });
});