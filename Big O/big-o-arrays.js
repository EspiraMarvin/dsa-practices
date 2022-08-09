// Arrays -BIG-O
// -An array is an ordered collection of values
const odd = [1, 3, 5, 7, 9]
// Methods
/*

Insert/remove at end       - 0(1) -constant
Insert/remove at beginning - O(n) -linear - this is because the index has to be reset for every remaining element in an array
Access - O(1)
Search - O(n)
Push/Pop - O(1)
Shift/ unshift/ concat/ slice/ splice -O(n)
forEach/ map/ filter/ reduce - O(n)

*/

/*
 Note: when solving a problem you might use .forEeach or .filter and the callback function would also contain a for-loop in such a scenario it becomes a quadratic time complexity
 and the interviewer might not be happy with that.

*/