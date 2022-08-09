/*
Given a log file with the following entries, write a function that returns the top 10 IP addresses in the file

1657628632, /index.html, 156.34.23.65
1422455635, /admin/console.html, 123.43.54.165
1765234233, /contact.html, 132.98.43.1
1763452341, /index.html, 156.34.23.65
1346245434, /logout.html, 123.43.54.165
1342452222, /support.html, 156.34.23.65
*/

const ips = ['156.34.23.65', '123.43.54.165', '132.98.43.1', '156.34.23.65', '123.43.54.165', '156.34.23.65']
// console.log('typeof', typeof ips)

let count = 0
let ipCount = []
const getTopTen = (ips) => {
    ips.reduce((acc, currIp) => {
        console.log('acc', acc)
        console.log('currIp', currIp)
        return { acc, [currIp]: (acc[currIp] || 0 + 1)}
    })
}


console.log(getTopTen(ips))

// const arry = [1, 2, 1, 3, 4, 3, 5];
// const arry = ['156.34.23.65', '123.43.54.165', '132.98.43.1', '156.34.23.65', '123.43.54.165', '156.34.23.65']


// const tofindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
// const duplicateElements = tofindDuplicates(arry);
// console.log(duplicateElements);