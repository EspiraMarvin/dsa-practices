/**
 *  Merge sort
 * 
 *  Given an array of integers, sort the array in asc order
 *  const arr = [-6, 20, 8, -2, 4]
 */

/** 
 *  Merge sort idea(
 * Divide the array into sub arrays, each containing only one element(An array with one element is considere sorted)
 * Repeatedly merge the sub array to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.
*/

// asc order/ default
function mergeSort(arr) { 
    //divide the arr til its length is 1/ make sure arr is only min 1 length
    if (arr.length < 2) return arr
    // divide arr
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr =  arr.slice(mid,)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let sortedArr = []
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift()) // shift because element shld also be removed from the leftArr/left array
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

 console.log('mergeSort', mergeSort([-6, 20, 8, -2, 4])) // output [-6, -2, 4, 8, 20
 console.log('mergeSort', mergeSort([-8, 20, -2, 4, -6])) // output [-8, -6, -2, 4, 20]


 // desc order / reverse sorted
 function mergeSortDesc(arr) {
    if (arr.length < 2) return arr
    // divide arr
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr =  arr.slice(mid,)
    return mergeReverse(mergeSort(leftArr), mergeSort(rightArr))
}

function mergeReverse(leftArr, rightArr) {
    let sortedArr = [] 
    while(leftArr.length && rightArr.length) {
        if (leftArr[0] >= rightArr[0]) {
            sortedArr.push(rightArr.shift())
        } else {
            sortedArr.push(leftArr.shift())
        }
    }
    return [...sortedArr, ...rightArr, ...leftArr]
}


console.log('mergeSortDesc', mergeSortDesc([-6, 20, 8, -2, 4])) // output [20, 8, 4, -2, -6]
console.log('mergeSortDesc', mergeSortDesc([-8, 20, -2, 4, -6])) // output [20, 4, -2, -6, -8]



/*
 BIG-O 
    time complexity (2)
    a - worst case - O(n^2) / Quadratic - has 2 next nested loop 
       - as the no of elements in the arr increases, the no of comparison increases by square the number

    b- average case complexity - O(nlogn) - we continuously/recursively divide the array into smaller arrays log(n), we also have a for-loop which is O(n) -> log(n)+ O(n) = O(nlogn)

    space complexity -  -  additional data structure used
*/