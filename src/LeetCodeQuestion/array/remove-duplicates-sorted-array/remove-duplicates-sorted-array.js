//LinearTime Time Complexity:O(n) Space Complexity: O(1)
export function removeDuplicatesSortedArray(nums) {
  let i = 0;
  for (let j = 1; j < nums.length;) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j]
      j++
    }
    else
      nums.splice(j, 1)
  }
};












