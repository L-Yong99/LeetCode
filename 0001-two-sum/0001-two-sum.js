/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {

  // iterate through each item in array
  for (let i = 0; i < nums.length; i++) {

      // deduct num from target, to find the difference
      difference = target - nums[i]

      // check if leftover value exist in array
      if (
          nums.includes(difference) &&
          nums.indexOf(difference) != i
          ) {

          // take the position of the two number into new array
          return [i, nums.indexOf(difference)]
      }
  };
  
};

