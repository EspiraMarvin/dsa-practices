/**
 *  Quick sort
 * 
 *  Given an array of integers, sort the array in asc order
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * 
 */

/** 
 *  Quick sort idea
 * Pick first element as pivot / last element
 * Pick last element as pivot(our approach)
 * pick a random element as pivot
 * pick mediam as pivot
 * 
 * Pivot everything that's smaller than the pivot into a `left` array & everything that's greater than the pibot into a `right` array
 * Repeat the process for the individuall `left` & `right` arrays till you have an array of length 1, which is sorted by definition
 * Repeatedly concatenate the left array, pivot & right array till one sorted array remains
*/

// asc order/ default
function quickSort(arr) { 
    if (arr.length < 2) return arr
    let pivot = arr.length -1 // pivot elem / last elem
    let left = []
    let right = []
    for( let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])   
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

 console.log('quickSort', quickSort([-6, 20, 8, -2, 4])) // output [-6, -2, 4, 8, 20
 console.log('quickSort', quickSort([-8, 20, -2, 4, -6])) // output [-8, -6, -2, 4, 20]


 // desc order / reverse sorted
 function quickSortDesc(arr) {
    if(arr.length < 2) return
    let pivot = arr.length -1
    let left = []
    let right = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return[...quickSort(left),pivot, ...quickSort(right)]
}



console.log('quickSortDesc', quickSortDesc([-6, 20, 8, -2, 4])) // output [20, 8, 4, -2, -6]
console.log('quickSortDesc', quickSortDesc([-8, 20, -2, 4, -6])) // output [20, 4, -2, -6, -8]



/*
 BIG-O 
    time complexity (2)
    a - worst case - O(n^2) / Quadratic - has 2 next nested loop 
       - as the no of elements in the arr increases, the no of comparison increases by square the number

    b- average case complexity - O(nlogn) - we continuously/recursively divide the array into smaller arrays log(n), we also have a for-loop which is O(n) -> log(n)+ O(n) = O(nlogn)

    space complexity -  -  additional data structure used
*/