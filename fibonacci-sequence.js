/*
Given a number `n`, find the first `n` elements of the Fibonacci sequence

 Fibonacci sequence- is a sequence in which each number is the sum of 2 preceding ones
 
 The first 2 numbers in the sequence are 0 & 1
 fibonacci(2) = [0,1]
 fibonacci(3) = [0,1,1]
 fibonacci(7) = [0,1,1,2,3,5,8]


 */

 function fibonacci(n) {
    let fib = [0, 1]
    for(let i = 2; i < n; i++) {
        // console.log('i', i)
        // console.log('fib i', fib[i-1])
        // console.log('fib ii', fib[i-2])
        fib[i] = fib[i-1] + fib[i-2]
        // console.log('fib res', fib[i])
    }
    return fib
 }


// console.log(fibonacci(2)) // [0,1]
// console.log(fibonacci(3)) // [0,1,1]
// console.log(fibonacci(7)) // [0,1,1,2,3,5,8]

console.log(fibonacci(5)) // [0, 1, 1, 2, 3]

// Big-O = O(n) linear time complexity



function fib(n) {
    let a = 0
    let b = 1
    const arr = []

    for (let i=0; i< n; i++) {
        let c = a+b
        arr.push(a)
        b=a
        a=c
    }
    return arr
}


console.log(fib(5)) // [0, 1, 1, 2, 3]
