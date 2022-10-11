/**
 * 
 * 
 * Given a binary string s, return the number of substrings with all characters 1's. Since the answer may be too large, return it modulo 109 + 7.

Example 1:
    Input: s = "0110111"
    Output: 9
    Explanation: There are 9 substring in total with only 1's characters.
    "1" -> 5 times.
    "11" -> 3 times.
    "111" -> 1 time.

Example 2:

    Input: s = "101"
    Output: 2
    Explanation: Substring "1" is shown 2 times in s.

 */

function numSub(s){
    // return s.split('0').map(run => run.length).reduce((sum, n) => (sum + Math.floor(n * (n+1)/2)))

    return   s
    .split('0')
    .reduce((cnt, { length: len }) => cnt + (len * (len + 1)) / 2, 0) %
  (10 ** 9 + 7);
    
};


console.log('numSub', numSub("0110111")) // output 9

console.log('numSub', numSub("101")) // output 2

console.log('numSub', numSub("111111")) // output 21

