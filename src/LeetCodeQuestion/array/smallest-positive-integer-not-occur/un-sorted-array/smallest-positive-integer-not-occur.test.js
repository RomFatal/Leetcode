import smallestPositiveIntegerNotOccur from "./smallest-positive-integer-not-occur";

/*
Code Analysis

Objective:
The objective of the function is to find the smallest positive integer that does not occur in the given array of integers.

Inputs:
- arr: an array of integers

Flow:
1. Initialize min to 1
2. Sort the array in ascending order
3. Loop through the array
4. If the current element is greater than min, check if it is equal to min+1
5. If it is, update min to the current element
6. If it is not, return min
7. If the loop completes without finding a missing integer, return 1

Outputs:
- The smallest positive integer that does not occur in the given array of integers

Additional aspects:
- The function has a linear time complexity of O(n) and constant space complexity of O(1)
- The function assumes that the input array only contains positive integers
*/



describe('smallestPositiveIntegerNotOccur_function', () => {

    // Tests that the function returns the next smallest positive integer when given an array with no missing positive integers. tags: [happy path]
    it("test_array_with_no_missing_positive_integers", () => {
        const arr = [1, 2, 3, 4, 5];
        expect(smallestPositiveIntegerNotOccur(arr)).toBe(6);
    });

    // Tests that the function returns the smallest positive integer not in the array when given an array with missing positive integers. tags: [happy path]
    it("test_array_with_missing_positive_integers", () => {
        const arr = [1, 3, 6, 4, 1, 2];
        expect(smallestPositiveIntegerNotOccur(arr)).toBe(5);
    });

    // Tests that the function returns 1 when given an empty array. tags: [edge case]
    it("test_empty_array", () => {
        const arr = [];
        expect(smallestPositiveIntegerNotOccur(arr)).toBe(1);
    });

    // Tests that the function returns 1 when given an array with only one element. tags: [edge case]
    it("test_array_with_one_element", () => {
        expect(smallestPositiveIntegerNotOccur([5])).toBe(1);
    });

    // Tests that the function returns 1 when given an array with all negative integers. tags: [edge case]
    it("test_array_with_all_negative_integers", () => {
        expect(smallestPositiveIntegerNotOccur([-5, -10, -15])).toBe(1);
    });

    // Tests that the function returns the next smallest positive integer when given an array with all positive integers but missing one. tags: [edge case]
    it("test_array_with_all_positive_integers_but_missing_one", () => {
        expect(smallestPositiveIntegerNotOccur([1, 2, 3, 4, 6])).toBe(5);
    });

    it("test_array_with_positive_and_negative_integers", () => {
        expect(smallestPositiveIntegerNotOccur([1, 2, -3, 4, -6, 2, 6, 9])).toBe(3);
    });
});
