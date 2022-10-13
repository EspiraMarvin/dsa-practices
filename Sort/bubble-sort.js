/**
 *  Bubble sort
 * 
 *  Given an array of integers, sort the array in asc order
 * 
 * const arr = [-6, 20, 8, -2, 4]
 * 
 */


 // ascending order -default sort method
function bubbleSort(arr) {
    // bubble sort under the hood is return arr.sort((a, b) => a-b)
    let swapped
    do{
        swapped = false
        for (let i=0; i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                // [arr[i], arr[i+1]] = [arr[i+1], arr[i]] // or you can use destructuring assignment
                swapped = true
            } 
        }
    } while(swapped)
    return arr
}


console.log('bubbleSort', bubbleSort([-6, 20, 8, -2, 4])) // output [-6, -2, 4, 8, 20]
console.log('bubbleSort', bubbleSort([-8, 20, -2, 4, -6])) // output [-8, -6, -2, 4, 20]

// descending order
function bubbleSortDesc(arr) { 
    // bubble sort under the hood is return arr.sort((a, b) => a-b)
    let swapped
    do{
        swapped = false
        for (let i=0; i<arr.length-1;i++){
            if(arr[i] < arr[i+1]){
                let temp;
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            } 
        }
    } while(swapped)
    return arr
}



console.log('bubbleSortDesc', bubbleSortDesc([-6, 20, 8, -2, 4])) // output [20, 8, 4, -2, -6]
console.log('bubbleSortDesc', bubbleSortDesc([-8, 20, -2, 4, -6])) // output [20, 4, -2, -6, -8]


/*
    time complexity - BIG-O - O(n^2) - has 2 next nested loop 
       - as the no of elements in the arr increases, the no of comparison increases by square the number

    space complexity - constant - no additional data structure used
*/