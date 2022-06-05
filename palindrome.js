/*
Given an integer x, return true if x is palindrome integer
An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
Input: x = 121
Output: true
Input: x = -121
Output: false 
*/


// solution without converting the number to a string

// using modulus%, Math.floor()
function isPalindromeOne(x) {
    // prevent checking negative numbers (we dont want to handle a situation of example -1221 to 1221-)
    if (x < 0) return false
    let reverse = 0;
    for(let i=x; i>=1; i=Math.floor(i/10)) {
        reverse = reverse*10 + i%10
        // console.log('reverse', reverse)
    }
    console.log(reverse === x)
    return reverse === x
}
isPalindromeOne(1221)


// solution with converting the number to a string

function isPalindromeTwo(x) {
    // convert the number to string, reverse string
    let reversed = x.toString().split('').reverse().join('')
    return (x.toString() === reversed)
}

function isPalindromeThree(x) {
    let reversedStr = ''
    let xString = x.toString()
    for (let i of xString){
        reversedStr = i + reversedStr
    }
    return reversedStr === xString
}


// not working
function isPalindromeFour(x) {
    let reversed = 0
    while(x > 0) {
        console.log('x', x)
        reversed = reversed*10 + x%10
        let y = Math.floor(x/10)
        console.log('reversed', reversed)
        console.log('y F', y)
    }
    console.log('reversed === x', reversed === x)
    return reversed === x
}
