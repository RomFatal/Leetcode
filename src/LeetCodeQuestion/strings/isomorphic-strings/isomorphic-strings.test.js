import isomorphicStrings from "./isomorphic-strings"

/*
Code Analysis:
-The function 'isomorphicStrings' checks if two input strings are isomorphic or not.
- The main goal of the function is to return a boolean value indicating whether the two input strings are isomorphic or not.
- The function takes two string inputs 's' and 't'.
- It first checks if the length of both strings is equal. If not, it returns false.
- It then creates two arrays 'mapsChar' and 'marked' of size 256 and fills them with -1 and false respectively.
- The function then iterates through each character of the input strings using a for loop.
- For each character, it checks if the corresponding character in the other string has already been mapped or not.
- If not, it maps the character to the corresponding character in the other string and marks it as mapped.
- If the character has already been mapped, it checks if the mapping is correct or not. If not, it returns false.
- If the function completes the loop without returning false, it returns true indicating that the two input strings are isomorphic.
*/


describe('isomorphicStrings_function', () => {

    // Tests that the function returns true when two identical strings are passed as inputs. tags: [happy path]
    test("test_identical_strings", () => {
        expect(isomorphicStrings("abc", "abc")).toBe(true);
        expect(isomorphicStrings("a", "a")).toBe(true);
        expect(isomorphicStrings("", "")).toBe(true);
    });

    // Tests that the function returns true when two different but isomorphic strings are passed as inputs. tags: [happy path]
    test("test_isomorphic_strings", () => {
        expect(isomorphicStrings("egg", "add")).toBe(true);
        expect(isomorphicStrings("paper", "title")).toBe(true);
        expect(isomorphicStrings("ab", "aa")).toBe(false);
    });

    // Tests that the function returns false when two empty strings are passed as inputs. tags: [edge case]
    test("test_empty_strings", () => {
        expect(isomorphicStrings("", "a")).toBe(false);
        expect(isomorphicStrings("a", "")).toBe(false);
    });

    // Tests that the function returns false when two strings of different lengths are passed as inputs. tags: [edge case]
    test("test_different_lengths", () => {
        expect(isomorphicStrings("abc", "abcd")).toBe(false);
        expect(isomorphicStrings("abcd", "abc")).toBe(false);
    });
});