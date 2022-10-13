/**
 *  Insertion sort
 * 
 *  Given an array of integers, sort the array in asc order
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * 
 */

/** 
 * Insertion sort idea
 * Virtually split the array into a sorted & an unsorted part
 * Assume that the first element is already sorted & the remaining elements are unsorted
 * then Select an unsorted element and compare with all elements in the sorted part
 * if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part.
 * Else, shift larger elements in the sorted part towards the right.
 * Inser the selected element at the right index
 * Repeat till all the unsorted elements are placed in the correct order
*/

// asc order// default
 function insertionSort(arr) {
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

 console.log('insertionSort', insertionSort([-6, 20, 8, -2, 4])) // output [-6, -2, 4, 8, 20
 console.log('insertionSort', insertionSort([-8, 20, -2, 4, -6])) // output [-8, -6, -2, 4, 20]


 // desc order
 function insertionSortDesc(arr) {
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



console.log('insertionSortDesc', insertionSortDesc([-6, 20, 8, -2, 4])) // output [20, 8, 4, -2, -6]
console.log('insertionSortDesc', insertionSortDesc([-8, 20, -2, 4, -6])) // output [20, 4, -2, -6, -8]



/*
 BIG-O 
    time complexity - O(n^2) / Quadratic - has 2 next nested loop 
       - as the no of elements in the arr increases, the no of comparison increases by square the number

    space complexity - constant - no additional data structure used
*/