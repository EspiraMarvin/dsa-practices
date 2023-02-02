const logs = ['1 2 3', '2 3 4','1 2 5']
const logs = ['88 99 200', '88 99 3000', '99 32 100', '12 12 15']
const logs = ['1 1 100', '2 3 200','2 4 500']

const threshold = 2

function findSuspiciousIds(logs, threshold) {
  // only change after
//   let sortedLogs = logs.sort((a, b) => a - b)

const map = {};
 let ids = [];
 
  for (let i = 0; i < logs.length; i++) {
        const [sender_user_id, recipient_user_id] = logs[i].split(' ')
        map[sender_user_id] = 0
        map[recipient_user_id] = 0
    }
    
    for (let i = 0; i < logs.length; i++) {
        const [sender_user_id, recipient_user_id] = logs[i].split(' ')
        if (sender_user_id !== recipient_user_id) {
            map[sender_user_id] += 1
            map[recipient_user_id] += 1
        }
        if (sender_user_id === recipient_user_id) {
            map[sender_user_id] += 1
        }
    }
    for (let [key, value] of Object.entries(map)) {
        if (value >= threshold)
            ids.push(key.toString())
    }
    
   return ids;
   // only change before
}
