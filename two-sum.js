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

function twoSum_ (nums, target) {
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

// this above solution is taking O[N*2] / O[N*N] (ORDER N squared)
// because its a nested loop of 2 loops 
// each loop takes order N/ O(N). Since they're two it takes order N squared/ O(N*2)

// OPTIMIZED SOLUTION
/*
Whenever we're searching, eg above searching Y, that's a good place to use another data structure.
MOST DATA STRUCTURES FOR SEARCHING WILL BE
1. HASHMAPS/ DICTIONARIES
2. HASHSETS/ SETS
*/


// OPTIMIZED SOLUTION continued..
// when we're looking up for an item/value in a map its a fast look up of ORDER ONE -> O(1)
/*
  using map 
      ________________
     |__Key__|_ Value_|
     |___15_ |____0 __|
     |___11__|____1___|
     |____2__|____2___|
     |____8__|____3___|
     |_______|________|

     let nums = [15,11,2,8,7]   
     for i in nums
       y = target - nums[i]  
       // we take target subtract from the first number which is 15
       y = 9 - 15 = -6 // look at "keys" in the map for -6, if its not found in the map, we add the number 15 as key and its index as value. Next, we take the next number 11.
       y = 9 - 11 = -2 // look at -2 in the map, its not found, we add the number 11 in the map as key and add its index as value. Next, we take the next number 2.
       y = 9 - 2  = 7  // look at  7 in the map, its not found, we add the number 2 in the map as key and add its index as value.  Next, we take the next number 8.
       y = 9 - 8  = 1  // look at  1 in the map, its not found, we add the number 8 in the map as key and add its index as value. Netxt, we take the next number 7
       y = 9 - 7 =  2  // look at "keys" in the map for 2, its FOUND, we've found the solution, Y is 7 on index 4

*/

function twoSum (nums, target) {
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


twoSum(nums, target)