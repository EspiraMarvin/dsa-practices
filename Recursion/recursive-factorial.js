/* Recursive factorial of a number

Problem - given an integer `n`, denoted n!, is the product of all positive integers less than or equal to `n`
 5! = 5*4*3*2*1 = 120  / 5*4!
 4! = 4*3*2*1 = 24     / 4*3!
 3! = 3*2*1            / 3*2!
 2! = 2*1              / 2*1!  
 1! = 1*1              / 1*0!
 0! = 1

 In summary
n! = n*(n-1)!
*/

function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0)) // 1
console.log(recursiveFactorial(1)) // 1
console.log(recursiveFactorial(5)) // 120


/*
BIG-O -> O(n) - linear

*/