function removeDuplicates (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j]
    }
  }
};

function removeDuplicates2 (nums) {
  let i = 0;
  for (let j = 1; j < nums.length;) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j]
      j++; 
    }
    else
    {
      nums.splice(j,1);
    }
  }
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates2(nums);
console.log(nums);
document.getElementById('value').innerText = nums;