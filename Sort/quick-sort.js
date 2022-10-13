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
    for(let i=0; i < arr.length; i++){
        let numberToInsert = arr[i] // ele to sort
        let j = i-1 // index of the sorted element
        // ensure sorted element is greater than the numberToInsert
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j] // shift to the right by 1
            j = j-1           // decrease idx of sorted ele by 1 while comparing(if arr[i] > numberToInsert)
        }
        arr[j+1] = numberToInsert // if current no. is less than numberToInsert (arr[i] < numberToInsert) insert the numberToInsert after the current no.
    } 
    return arr
}

 console.log('quickSort', quickSort([-6, 20, 8, -2, 4])) // output [-6, -2, 4, 8, 20
 console.log('quickSort', quickSort([-8, 20, -2, 4, -6])) // output [-8, -6, -2, 4, 20]


 // desc order
 function quickSortDesc(arr) {
    for(let i=0; i < arr.length; i++){
        let numberToInsert = arr[i] // ele to sort
        let j = i-1 // index of the sorted element
        // ensure sorted element is greater than the numberToInsert
        while(j >= 0 && arr[j] < numberToInsert) {
            arr[j+1] = arr[j] // shift to the right by 1
            j = j-1           // decrease idx of sorted ele by 1 while comparing(if arr[i] > numberToInsert)
        }
        arr[j+1] = numberToInsert // if current no. is less than numberToInsert (arr[i] < numberToInsert) insert the numberToInsert after the current no.
    } 
    return arr
}



console.log('quickSortDesc', quickSortDesc([-6, 20, 8, -2, 4])) // output [20, 8, 4, -2, -6]
console.log('quickSortDesc', quickSortDesc([-8, 20, -2, 4, -6])) // output [20, 4, -2, -6, -8]



/*
 BIG-O 
    time complexity - O(n^2) / Quadratic - has 2 next nested loop 
       - as the no of elements in the arr increases, the no of comparison increases by square the number

    space complexity - constant - no additional data structure used
*/