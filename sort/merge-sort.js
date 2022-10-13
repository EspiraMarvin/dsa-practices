/**
 *  Merge sort
 * 
 *  Given an array of integers, sort the array in asc order
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * 
 */

/** 
 *  Merge sort idea
*/

// asc order/ default
function mergeSort(arr) { 
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
    return [...mergeSort(left),pivot,...mergeSort(right)]
}

 console.log('mergeSort', mergeSort([-6, 20, 8, -2, 4])) // output [-6, -2, 4, 8, 20
 console.log('mergeSort', mergeSort([-8, 20, -2, 4, -6])) // output [-8, -6, -2, 4, 20]


 // desc order / reverse sorted
 function mergeSortDesc(arr) {
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
    return[...mergeSort(left),pivot, ...mergeSort(right)]
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