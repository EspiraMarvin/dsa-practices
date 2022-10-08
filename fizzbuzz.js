/**
 * Fizz Buzz
 * 
 * Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

Example 1:
    Input: n = 3
    Output: ["1","2","Fizz"]

 */

function fizzBuzz(n) {
    let arr= []
    for(let i=1; i<=n ;i++){
        if(i%3 === 0  && i%5 === 0){
            arr.push("FizzBuzz")
        } else if (i%3 === 0){
            arr.push("Fizz")
        } else if(i%5 === 0){
            arr.push("Buzz")
        }  else {
            arr.push(i.toString())
        }
    }
    return arr
}

console.log('fizzBuzz', fizzBuzz(5)) // output ["1","2","Fizz","4","Buzz"]
console.log('fizzBuzz', fizzBuzz(6)) // output ["1","2","Fizz","4","Buzz","Fizz"]
console.log('fizzBuzz', fizzBuzz(15)) // output ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]