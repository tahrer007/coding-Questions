//26. Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  if (nums.length === 1) return nums;
  let right = 1;
  let left = 0;

  let index = 0;
  let next = 1;

  while (nums.length > index) {
    if (nums[index] === nums[next]) {
      nums.splice(next, 1);
    } else {
      index++;
      next++;
    }
  }

  return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
