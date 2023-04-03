//findPivotIndex Complexity:O(n) Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
export default function findPivotIndex (nums) {
  let totalSum=0, right=0, left=0;
  for(let i=0; i < nums.length; i++)
      totalSum += nums[i];

  left = totalSum;
  for(let i=0; i < nums.length; i++)
  { 
      if( right != left - nums[i] )
      {
          right += nums[i];
          left -=nums[i];
      }
      else 
          return i;
  }
  return -1;
};












