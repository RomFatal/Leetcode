import quickSort from "./quick-sort";


describe('quickSort_function', () => {

    // Tests that the function correctly sorts an array with a large number of elements. tags: [happy path]
    it("test_large_array_sorting", () => {
        const arr = [5, 5, 3, 8, 1, 9, 2, 7, 4, 6];
        const sortedArr = quickSort(arr);
        expect(sortedArr).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 8, 9]);
    });

    // Tests that the function correctly sorts an array with a large number of elements.
    it("test_negative_numbers", () => {
        const arr = [27, 100, 5, 3, 8, 1, -3, 9, 2, -5, 7, 4, 6];
        const sortedArr = quickSort(arr);
        expect(sortedArr).toEqual([-5, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 27, 100]);
    });

    // Tests that the function correctly sorts an empty array. tags: [edge case]
    it("test_empty_array_sorting", () => {
        const arr = [];
        const sortedArr = quickSort(arr);
        expect(sortedArr).toEqual([]);
    });
});
