import { palindromeNumber1, palindromeNumber2, palindromeNumber3 } from "../../code/string/palindrome-number";


describe('test palindrome number', () => {

    test('palindromeNumber1 should be right', () => {
        expect(palindromeNumber1(200).length).toBe(29);
        expect(palindromeNumber1(0)).toEqual([]);
    });

    test('palindromeNumber2 should be right', () => {
        expect(palindromeNumber2(200).length).toBe(29);
        expect(palindromeNumber2(0)).toEqual([]);
    });
    
    test('palindromeNumber3 should be right', () => {
        expect(palindromeNumber3(200).length).toBe(29);
        expect(palindromeNumber3(0)).toEqual([]);
    });
});