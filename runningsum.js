/**
 * Running Sum of 1D Array
 * 
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * 
 * Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */

function runningSum(nums) {
    let results = []
    results[0] = nums[0]
    for (let i=1; i < nums.length; i++) {
        results[i] = nums[i] + results[i - 1]
    }
    return results

}
console.log('runningSum', runningSum([1,1,1,1,1])) // Output: [1,2,3,4,5]
console.log('runningSum', runningSum([1,2,3,4])) // Output: [1,3,6,10]


/*
    time complexity = O(n) as we go via all elements in our input & perform the same no of operations
    space complexity is constant = O(1) our solution don't create another data structure proportional in size to our input
*/

// solution II

function runningSumSolTwo(nums) {
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i-1]
    }
    return nums

}

/*
    time complexity = O(n) as we go via all elements in our input & perform the same no of operations
    space complexity is constant = O(1) our solution don't create another data structure
*/

console.log('runningSumSolTwo', runningSumSolTwo([1,1,1,1,1])) // Output: [1,2,3,4,5]
console.log('runningSumSolTwo', runningSumSolTwo([1,2,3,4])) // Output: [1,3,6,10]


