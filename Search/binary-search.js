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

function binarySearch(arr, target) {
    // const sortedArr = arr.sort((a, b) => a -b) // we don't need to sort as this arr is already sorted
    let firstIndex=0
    let lastIndex=arr.length - 1

    while(firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
        // console.log('middleIndex', middleIndex)

        if (arr[middleIndex] === target){
            // console.log('middleIndex', middleIndex)
            return middleIndex
        } else if (arr[middleIndex] < target){
            firstIndex = middleIndex + 1
        } else {
            lastIndex = middleIndex - 1
        }
    }
    return -1
}

console.log('binarySearch 20', binarySearch([-5,2, 4, 6, 10], 10)) // 3
console.log('binarySearch 20', binarySearch([-5,2, 4, 6, 10], 6)) // 4
console.log('binarySearch 20', binarySearch([-5,2, 4, 6, 10], 20)) // -1


// console.log('binarySearch 2', binarySearch([-5,2, 10, 4, 6], 10)) // 2
// console.log('binarySearch 6', binarySearch([-5,2, 10, 4, 6], 6)) // 4
// console.log('binarySearch 20', binarySearch([-5,2, 10, 4, 6], 20)) // -1



/*
    BIG-O - O(logn) - input size reduced by half 
*/