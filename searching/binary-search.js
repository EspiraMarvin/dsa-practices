/**
 * Binary search 
 * 
 * -- only done in sorted arrays
 * 
 * Given a sorted array of `n` elements and a target element `t`, find the index of `t` in the array. 
 * Return -1 if the target element is not found.
 * 
 * examples
    arr = [-5,2, 10, 4, 6], t=10 -> should return 2
    arr = [-5,2, 10, 4, 6], t=6 -> should return 4
    arr = [-5,2, 10, 4, 6], t=10 -> should return -1
*/
/**
 * If array is empty return -1
 * If array has elements, find the middle element in the array,
 * if target is equal to the middle element, return the middle element index
 * If target is less than the middle element, binary search left half of the arr
 * If target is greater than the middle element, binary search right half of the arr
 */

function binarySearch(arr, target) {
  // const sortedArr = arr.sort((a, b) => a -b) // we don't need to sort as this arr is already sorted
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    // console.log('middleIndex', middleIndex)

    if (arr[middleIndex] === target) {
      // console.log('middleIndex', middleIndex)
      return middleIndex
    } else if (arr[middleIndex] < target) {
      // target is in the left half of the arr - go to the right to get the target
      leftIndex = middleIndex + 1
    } else {
      // target is in the right half of the arr - go to the left to get the target
      rightIndex = middleIndex - 1
    }
  }
  return -1 // if not found return -1
}

console.log("binarySearch 20", binarySearch([-5, 2, 4, 6, 10], 10)) // 3
console.log("binarySearch 20", binarySearch([-5, 2, 4, 6, 10], 6)) // 4
console.log("binarySearch 20", binarySearch([-5, 2, 4, 6, 10], 20)) // -1

// console.log('binarySearch 2', binarySearch([-5,2, 10, 4, 6], 10)) // 2
// console.log('binarySearch 6', binarySearch([-5,2, 10, 4, 6], 6)) // 4
// console.log('binarySearch 20', binarySearch([-5,2, 10, 4, 6], 20)) // -1

/*
    time complexity - BIG-O - O(logn) - input size reduced by half 
    space complexity - constant - no additional data structure used
*/
