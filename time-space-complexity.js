// BIG-O TIME COMPLEXITY - is calculated based on the number of times a statement is executed based on the input size.
// examples
/*
1. Linear time complexity      - O(n) - worst case time complexity/time complexity
2. Constant time complexity    - 0(1)
3. Quadratic time complexity   - O(n^2)
4. Cubic time complexity       - O(n^3)
5. Logarithmic time complexity - O(log n)

*/

//Linear time complexity O(n). - As the input size increases the time complexity also increases
// most times a loop represents linear time complexity
function summation(n) {
    let sum = 0                         // 1
    for (let i = 1; i <= n;  i++) {     // 4 (n)
        sum += i                        // 1
    }
    return sum
}

// 4 + 2/ n + 2 can be written as just O(n) as input increases the time complexity also increases

// console.log('res', summation(4)) - this is linear time complexity O(n)




// time complexity 0(1)- CONSTANT time complexity - algorith doesn't need extra memory, & algorith needed doesn't depend on the input size, the space complexity is constant
//examples are sorting algorithms which sort within the array without utilizing additional arrays
//irrespective of the input line 2 is executed only once
function sum(n) {
    return (n * (n+1)) / 2;    // line 2
}

console.log('res', sum(4))


//time complexity O(n^2) - QUADRATIC time complexity - if there are 2 nested loops
//eg 3n^2 + 5n + 1
for(i =1; i <=n; i++){
    for (j = 1; j <= i; j++){
        // some code
    }
}



//time complexity O(n^3) - CUBIC time complexity - if there are 3 nested loops

for(i =1; i <=n; i++){
    for (j = 1; j <= i; j++){
        for (k = 1; k <= j; k++) {
            // some code
        }
    }
}

// time complexity O(logn) -LOGARITHMIC time complexity - if the input size reduces by half every iteration


// SPACE COMPLEXITY
/* 
1. Constant - O(1) -no extra space/memory needed when input size increases
2. Linear   - O(n) - extra space neede when input size increases
3. Logarithmic -O(log n) - extra space needed grows but not at the same rate as the input size
4. Quadratic - you should try to avoid
*/