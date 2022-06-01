/* EASY
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

EXAMPLE 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

let nums = [2,7,11,15]
let target = 9

function twoSum (nums, target) {
    /*
     x+y = target -> x+y =9
     y = target -x
    */
     for (i = 0; i < nums.length; i++) {
         for (j = 0; j < nums.length - 1; j++) {
             // x = nums[i]
             // find y -> y = target - x
             y = target - nums[i]

             if (y === nums[j])  {
                //  console.log('[i, j]', [i , j])
                //  console.log('[nums[i], nums[j]]', [nums[i] , nums[j]])
                return [i, j]
             }
                
         }
     }
}

twoSum(nums, target)