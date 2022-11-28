/**
 * 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

 */

var uniqueInOrder = function (iterable) {
  let Arr = []

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i - 1] === undefined) {
      // if (i === 0)
      Arr.push(iterable[i])
      continue
    }
    if (iterable[i - 1] === iterable[i]) {
      continue
    } else {
      Arr.push(iterable[i])
    }
  }

  return Arr
}

console.log("uniqueInOrder,", uniqueInOrder("AAAABBBCCDAABBB")) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log("uniqueInOrder,", uniqueInOrder("ABBCcAD")) //['A', 'B', 'C', 'c', 'A', 'D']
