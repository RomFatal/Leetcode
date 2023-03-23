//Brute Force Time Complexity:O(n³) Space Complexity: O(1)
export function bruteForce(nums) {
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length;) {
      if (nums[i] == nums[j]) {
        for (let k = j; k < nums.length - 1; k++) {
          nums[k] = nums[k + 1];
        }
        nums.pop();
      }
      else {
        j++;
      }
    }
  return nums;
};












