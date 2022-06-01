/*
Given an integer array nums,
return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets


Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

const threeSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b) // sort in ascending order

    console.log('sorted', sorted)
    const triplets = []

    
}

threeSum([-1,0,1,2,-1,-4])
