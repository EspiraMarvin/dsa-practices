/*   Recursive Fibonacci Sequence
Given a number `n`, find the nth element of the fibonacci sequence
- In maths, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
- The first two numbers is the sequence are 0 and 1. (0,1,1,2,3,5,8,...)
recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8

If F represents a function to calculate the Fibonacci number, then
Fn = Fn-1 + Fn-2
Basecase/Condition to terminate the recursion
F0 = 0 and F1 = 1
 what's F2 = F1 + F0
 F2 = 1 + 0
 F2 = 1
*/

function recursiveFibonacci(n) {
  if (n < 2) {
    // this will return 0 if n=0 and will return 1 if n=1
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8
console.log(recursiveFibonacci(7)) // 13
// console.log(recursiveFibonacci(50)) // will take forever unless optimized by memoization fn below

/*
Recursive BIG-O -> O(2^n)
Recursion is not a solution to fibonacci sequence problem
*/

//recursive MEMOIZATION
/**
 *
 * @param {*} n fibonacci number
 * @param {*} memo JS object, keys will be arg to fn, value will be the return value
 * @returns fib of n
 */
const fibMemoized = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n < 2) return n
  memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo)
  return memo[n]
}

console.log(fibMemoized(0)) // 0
console.log(fibMemoized(1)) // 1
console.log(fibMemoized(6)) // 8
console.log(fibMemoized(7)) // 13
console.log(fibMemoized(50)) //
