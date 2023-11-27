/*
Given an integer x, return true if x is palindrome integer
An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
Input: x = 121
Output: true
Input: x = -121
Output: false 
*/
function isPalindrome(x: number): boolean {
  if (x < 0) return false
  let reverse = 0
  for (let i = x; i >= 1; i = Math.floor(i / 10)) return reverse === x
}
