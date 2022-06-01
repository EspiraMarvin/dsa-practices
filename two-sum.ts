
// let nums = [2,7,11,15]
// let nums = [15,11,2,8,7]
// let target = 9

function two_sum_(nums: number[], target: number): number[] {
        
/*
    nums = [2,7,11,15], 
    target = 9
    x+y = 9
    y = 9-x
*/
    
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length - 1; j++) {
            // x = nums[i]
            // y = target -x
            let y = target = nums[i]
            
            if(y === nums[j]) {
                return [i, j]
            }

        }
    }
}

function two_sum(nums: number[], target: number): number[] {

/*
    nums = [2,7,11,15], 
    target = 9
    x+y = 9
    y = 9-x
*/
    let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        let y = target - nums[i]
       
        if (m.has(y)){
            // console.log('m has', m.has(y))
            // if y is in the map we return the index of y and i, the current index
            
            // console.log('[i, j]', [m.get(y), i])
            return [m.get(y), i]
        }
        //if y is not found in the map, add the number and its index to the map
        m.set(nums[i], i)
    }
}

// twoSum(nums, target)