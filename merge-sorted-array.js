/**
 * 
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
    Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * 
 */


 /**
 Do not return anything, modify nums1 in-place instead.
 */
/*
 the solution is actually looping once on nums1, array from ist end(which is empty) from the start.
 On each iteration, we decide whether to copy an element from nums1 or from nums2 (starting from their end and using index1 & index2 to keep poiting to the remaining elements of each array)
 It's better to start inserting elements into the back of the nums1 array where, there's empty space
 - Note: there's no need to continue looping after running out of elements in nums2 since nums1 is aready sorted/
*/
 function merge(nums1, m, nums2, n) {
    let index1 = m-1
    let index2 = n-1
    // console.log('index1', index1)
    // console.log('index2', index2)
    let i = n+m-1

    for (let i = n+m-1; i >= 0 && index2 >=0; i--){
        const num1 = nums1[index1]
        const num2 = nums2[index2]
        // console.log('num1', num1)
        // console.log('num2', num2)

        if (index1 >= 0 && num1 > num2){
            nums1[i] =num1
            index1--
        } else {
            nums1[i] = num2
            index2--
        }
        // console.log('nums1[i]', nums1[i])
        // console.log('nums2[i]', nums2[i])


    }
};


console.log('merge',merge([1,2,3,0,0,0], 3, [2,5,6], 3) )

// Space complexity: O(1) - no additional space
// Time complexity: O(n+m)

// Space complexity: O(1) - no additional space
// Time complexity: O(n+m)