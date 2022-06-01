/*
Given an integer array nums,
return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets


Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/
//solution -> https://dev.to/urfan/leetcode-3sum-with-javascript-4b8j
// using 2 pointers uses O(n^2) time complexity
/*
1. we first sort the array in ascending order
2. We iterate through the arr with 2 pointer one on left and the other, right
3. Then we're going to find our current sum: which is sum of our current numberm a left number and a right number
4. Now we check if our current sum is equal to the target sum, which is 0 in this case
5. If its equal to the target sum we just add those three numbers to our final array(triplets)

6. If the current sum is less than 0, we move the left pointer to the right by one to increase the sum
  (since we sorted the array in asc order we know each number is greater than the number to the left)
7. If the current sum is greater than 0, we move the right pointer to the left by one to decrease the sum.
  (because we know that each number is smaller than the number to its right)

*/

const threeSum = function(nums) {
   nums.sort((a, b) => a - b) // sort in ascending order
   let sorted =  nums.sort((a, b) => a - b) // sort in ascending order
   console.log('sorted', sorted)
    const triplets = []

    for (let i = 0; i < nums.length; i++) {
        console.log('nums[i]', nums[i])
        console.log('nums[i - 1]', nums[i - 1])
        if (nums[i] != nums[i- 1]) { // making sure our solution does not contain duplicate triples
            let left = i + 1;
            let right = nums.length - 1;
            console.log('left', left)
            console.log('right', right)

            while(left < right) {
                const currentSum = nums[i] + nums[left] + nums[right]
                if(currentSum === 0) {
                    triplets.push([nums[i], nums[left], nums[right]])
                    while(nums[left] == nums[left + 1]) left ++
                    while(nums[right] == nums[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                    left ++;
                    right --;
                } else if (currentSum < 0) {
                    left ++
                } else if (currentSum > 0) {
                    right --
                }
            }
        }
    }

    console.log('triplets', triplets)
    return triplets
}

threeSum([-1,0,1,2,-1,-4])
