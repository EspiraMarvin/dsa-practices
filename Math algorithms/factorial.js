/*
Given an integer `n`, find the factorial of that integer

-In mathematics, the factorial of a non-negative integer `n`, denoted n!, is the product of all positive integer less than or equal to `n`

Factorial of zero is 1
Factorial of 1 is 1

eg.
factorial(4) = 4*3*2*1 = 24
factorial(5) = 5*4*3*2*1 = 120

*/
/* 
Solution - 
    - We loop over the fn argument/parameter `n` 
    - we create a variable to hold the product of all the numbers multiplied together. // let product = 1
    - loop over n and mulitply each number with the result variable // result *= 1 same as result = result * 1

*/

function factorial(n) {
    let result = 1
    for(let i = 1; i <= n; i++){
        result *= i // same as result = result * 1
    }
    return result
}

console.log('fac 0', factorial(0)) // 1
console.log('fac 1', factorial(1)) // 1
console.log('fac 3', factorial(3)) // 6
console.log('fac 4', factorial(4)) // 24
console.log('fac 5', factorial(5)) // 120
