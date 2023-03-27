/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {

  let difference = 0;
  let result = [];

  // iterate through each item in array
  for (let i = 0; i < nums.length; i++) {

      // guard clause for when result is found
      if (result.length != 0) break;

      // deduct num from target, to find the difference
      difference = target - nums[i]

      // check if leftover value exist in array
      if (
          nums.includes(difference) &&
          nums.indexOf(difference) != i &&
          target - nums[i] - difference === 0
          ) {

          // take the position of the two number into new array
          result.push(i);
          result.push(nums.indexOf(difference));
      }
  };

  return result;
  
};