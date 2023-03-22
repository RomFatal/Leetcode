//Brute Force Time Complexity:O(n³) Space Complexity: O(1)
var removeDuplicates1 = function (nums) {
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
    return nums.map((x)=>x);
};

var removeDuplicates2 = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j]
    }
  }
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
//removeDuplicates1(nums)

removeDuplicates2(nums)

console.log(nums)



export default removeDuplicates1;













