function maximumWealth(accounts) {
let arrW= []
    for(let i=0;i<accounts.length;i++){
        let sumWealth = accounts[i].reduce((acc, cur) => acc + cur)
        arrW.push(sumWealth)
    }
    return Math.max(...arrW)
}

// function maximumWealth(accounts) {
//     let arrWealth = [];
//     for (let i = 0; i < accounts.length; i++) {
//         let sumWealth = accounts[i].reduce((acc, cur) => acc + cur);
//         arrWealth.push(sumWealth);
//     }
//     return Math.max.apply(Math, arrWealth);
// };

console.log('maximumWealth', maximumWealth([[1, 5], [7, 3], [3, 5]]));
/*  // Output: 10
Explanation:
1st customer has wealth = 6
2nd customer has wealth = 10
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
*/
console.log('maximumWealth', maximumWealth([[1, 2, 3], [3, 2, 1]])); // Output: 6
