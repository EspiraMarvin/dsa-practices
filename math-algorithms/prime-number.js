/*
Given a natutal number `n`, determine if the number is prime or not

A Prime Number -> is a number greater than 1 that is not a product of two smaller numbers
-a composite no is a no that is not a prime

e.g
isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1)
*/
/*
SOL STEPS:
1. We check if the number(n) is less than 2, since prime number is a number greater than 1, if its less we return false(that's not a prime number)
2. We loop though the indexes of the n we start at index 2
3. We find the modulus/division of n and each index, if its 0 we return false(that's not a prime no. Bcoz its divisible/modulus is by n) 
4. - if no number could divide n (no modulus found) we return true(the number is a prime no.)

*/

function isPrime(n) {
    if(n < 2) return false 
    for (let i=2; i<n; i++) {
        if (n%i === 0) {  
         return false   
        }
    }
    return true
}

//BIG-O is O(n) linear
// as the value of n increases the no of times the for-loop execution/run time increases

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false


/*OPTIMIZED Primality Test
Integers larger than the square root do not need to be checked because,
whenever `n=a*b`, one of the two factors `a` and `b` is less than or equal 
to the square root of `n`

eg. n=24, a=4 and b=6
the square root of 24 is 4.89
4 is less than 4.89
a is less than the square root of n

eg2. n=35; a=5 and b=7
the square root of 35 is 5.91
5 is less than 5.91
a is less than the square root of n
*/

function isPrimee(n) {
    if(n < 2) return false 
    for (let i=2; i<= Math.sqrt(n); i++) {
        if (n%i === 0) {  
         return false   
        }
    }
    return true
}

/*
-if n=100 we check till n=10 if n=10,000 we check til n=100
 as the size of n increases the no of times the for-loop statement executes increases but not in the same proportion
 BIG-O -> O(sqrt(n))
*/

console.log(isPrimee(1)) // false
console.log(isPrimee(5)) // true
console.log(isPrimee(4)) // false
