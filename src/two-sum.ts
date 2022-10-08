/* EASY
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

EXAMPLE 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// let nums = [2,7,11,15]
let nums = [15,11,2,8,7]
let target = 9

function two_sum_(nums: number[], target: number): number[] | undefined {
        
/*
    nums = [2,7,11,15], 
    target = 9
    x+y = 9
    y = 9-x
*/
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length - 1; j++) {
            // x = nums[i]
            // y = target -x
            let y = target = nums[i]
            
            if(y === nums[j]) {
                return [i, j]
            }

        }
    }
}


// OPTIMIZED SOLUTIONS BELOW

function two_sum(nums: number[], target: number): number[] | undefined {

/*
    nums = [2,7,11,15], 
    target = 9
    x+y = 9
    y = 9-x
*/
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        let y = target - nums[i]
       
        if (m.has(y)){
            // console.log('m has', m.has(y))
            // if y is in the map we return the index of y and i, the current index
            
            // console.log('[i, j]', [m.get(y), i])
            return [m.get(y), i]
        }
        //if y is not found in the map, add the number and its index to the map
        m.set(nums[i], i)
    }
}

function two_sum_II (nums: number[], target: number): number[] | undefined {

    let m = new Map()

    for (const i in nums) {
        let y =  target - nums[i]

        if (m.has(y)) {
            return [m.get(y), i]
        }
        m.set(nums[i], i)
    }

}


two_sum(nums, target)