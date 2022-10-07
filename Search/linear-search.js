/**
 * Linear search
 * 
 * Given an array of `n` elements and a target element `t`, find the index of `t` in the array. 
 * Return -1 if the target element is not found.
 * 
 * examples
    arr = [-5,2, 10, 4, 6], t=10 -> should return 2
    arr = [-5,2, 10, 4, 6], t=6 -> should return 4
    arr = [-5,2, 10, 4, 6], t=10 -> should return -1
*/


function linearSearch(arr, target) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === target){
            return i
        } 
    }
    return -1
}

// function linearSearchh(arr, target) {
//     if (arr.indexOf(target)){
//         return arr.indexOf(target)
//     } else {
//         return -1
//     }
// }

console.log('linearSearch 2', linearSearch([-5,2, 10, 4, 6], 10)) // 2
console.log('linearSearch 6', linearSearch([-5,2, 10, 4, 6], 6)) // 4
console.log('linearSearch 20', linearSearch([-5,2, 10, 4, 6], 20)) // -1



/*
    BIG-O - O(n) linear time complexity, as the size of the array increases the no of times the if condition increases
*/