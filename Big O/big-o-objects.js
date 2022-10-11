// Objects -BIG-O
// -An array is a collection of key value pairs
const person = {
    firstName: 'Bryuce',
    lastName: 'Wayne'
}
// Methods
/*

Insert - 0(1) -constant
Remove - O(1) -constant
(No matter how many properties exists in an object, it takes the same amount of time to insert or remove a property)
Access a value using a key - O(1)
Search - O(n) -linear 

Methods
Object.keys()   -O(n) returns an array of all the keys
Object.values() -O(n) returns an array of all the values
Object.entries()-O(n) returns an array of all the key value pairs




*/
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

