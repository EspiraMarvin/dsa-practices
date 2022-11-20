/*
    Is similar to a stack but it's FIFO (First In First Out)
    Example: is waiting in line in a bank or a store to buy something
    the first person in the line will be the first out of the line.
    Example 2: A print queue when a no of people are printing documents
 */

function Queue() {
    let collection = [];
    this.print = function () {
        console.log(collection)
    };
    // add
    this.enqueue = function(element){
        collection.push(element)
    };
    //removes item in the beginning of an array
    this.dequeue = function () {
        return collection.shift();
    };
    //returns the 1st item in the queue
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.front();
q.print();


// Priority Queues
function PriorityQueue() {
    let matches = []; //collection of matches
    this.printCollection = function () {
        (console.log(matches));
    };
    this.enqueue = function (element) {
        if (this.isEmpty()){
            matches.push(element)
        }else{
            let added = false;
        for (let i = 0; i < matches.length; i++){
                if (element[i] <  matches[i][1]) { //checking priorities
                    matches.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                matches.push(element)
            }
        }

    };
    this.dequeue = function () {
        let value = matches.shift();
        return value[0];
    };
    this.front = function () {
        return matches[0];
    };
    this.size = function () {
        return matches.length;
    };
    this.isEmpty = function () {
        return (matches.length === 0);
    }
}

let pq = new PriorityQueue();
pq.enqueue(["manchester united", 2]);
pq.enqueue(["Liverpool, FC", 3]);
pq.enqueue(["manchester city", 1]);
pq.enqueue(["Chelsea FC", 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();

