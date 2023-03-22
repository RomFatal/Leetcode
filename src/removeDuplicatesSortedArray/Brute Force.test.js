import removeDuplicates1 from './Brute Force';

describe('playground', () => {
  it('should return correct results', () => {
    // Replace the next dummy test with your playground function tests.
    expect(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual([0, 1, 2, 3, 4]);
    //expect(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe([0, 1, 2, 3, 4]);
  });
});
