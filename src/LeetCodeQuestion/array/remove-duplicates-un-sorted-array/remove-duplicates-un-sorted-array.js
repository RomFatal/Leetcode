//Brute Force Time Complexity:O(n³) Space Complexity: O(1)
export default function removeDuplicatesUnSortedArray(nums) {
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length;) {
      if (nums[i] == nums[j])
        nums.splice(j,1)
      else 
        j++;
    }
  return nums;
};












