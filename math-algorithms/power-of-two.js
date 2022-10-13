/*
Given a positive integer `n`, determine if the number is a power of 2 or not

-An integer is a power of two if there exists an integer `x` such that `n` ===2^x

eg.
 isPoweOfTwo(1) = true(2^0)
 isPoweOfTwo(2) = true(2^1)
 isPoweOfTwo(5) = false -

*/
/*
If reminder is not 0 in any step `n` is not a power of two
If reminder is 0 and `n` comes down to 1 eventually, n is a power od 2
*/

function powerOfTwo(n) {
    if (n < 1) return false  // if n is not a positive n return false (not a power of 2)
    while (n > 1) {          // loop via n while n > 1, find modulus of n and 2, if modulus is not zero return false, otherwise
        if (n%2 !== 0) {     
            return false
        }                   // if modulus is 0,
        n = n/2        //(O(logn))     // divide n by 2 and repeat the loop
    }
    return true             // after exiting the loop that means n=1 and the modulus/reminder has always been zero. Hence n is a power of 2, we return true
}

console.log(powerOfTwo(1)) // true
console.log(powerOfTwo(2)) // true
console.log(powerOfTwo(5)) // false


/*
-though its a loop (O(n), its a while loop and the, input size is reduced by half (n=n/2) which is O(logn)
BIG-O notation -O(logn) - 
*/


//SOLUTION TWO- constant time complexity (O(1))
/* with bitwise AND operator(&)
  in binary a no. that is a power of 2 except for 1 ends in 0
  eg. 
     1-> 1
     2 -> 10
     3 -> 100
     4 -> 1000

     In bitwise AND is 1 if both no.s are 1, else its 0

     1 - 0001    2 - 0010    3 - 0100    4 - 1000
     0 - 0000    1 - 0001    2 - 0010    3 - 0100
     --------    --------    --------    -------- 
     0 - 0000    0 - 0000    0 - 0000    0 - 0000

 */

function powerOfTwoBitwise(n) {
    if (n < 1) return false
    return (n & (n-1)) === 0
}

console.log(powerOfTwoBitwise(1)) // true
console.log(powerOfTwoBitwise(2)) // true
console.log(powerOfTwoBitwise(5)) // false

// BIG-O - O(1) - irrespective of how large n is, we only have to run the operation(line 58) once