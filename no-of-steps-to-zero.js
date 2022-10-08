/**
 *  No of steps to reduce a number zero
 * 
 * Given an integer num, return the number of steps to reduce it to zero.
    In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.


Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

 */

function numberOfSteps (num) {
    let steps = 0
    while(num > 0) {
        if (num % 2 == 0) {
            num /= 2  // num = num/2
        } else {
            // remainder i 1
            num-- // num = num-1
        }
        steps++
    }
    return steps
}


console.log("numberOfSteps", numberOfSteps(14)) // output 6
console.log("numberOfSteps", numberOfSteps(8)) // output 



// using bitwise

function numberOfStepsBitwise (num) {

    let steps = 0
    while(num > 0) {
        if ((num & 1) == 0) {   
            num >>= 1 //num = num >> 1 //bitwise right shift by 1 place
        } else {
            // remainder i 1
            num-- // num = num-1
        }
        steps++
    }
    return steps
    
}

console.log("numberOfStepsBitwise", numberOfStepsBitwise(14)) // output 6
console.log("numberOfStepsBitwise", numberOfStepsBitwise(8)) // output 


/* FOR BOTH METHODS
    Time complexity - O(logn)
    space complexity is constant O(1) - we're not creating any data structures proportional in size to our inputs
*/