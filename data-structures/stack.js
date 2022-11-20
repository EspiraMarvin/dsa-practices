/*
       Stack (in js is just an array)
        -  is like a pile of books on top of each other/ or
        a browser with a back button
        It's a LIFO (Last In First Out)

        Functions:: push, pop, peek, length/size
        push - adds an item on top of the stack
        pop - removes top item from the stack
        peek - displays the top element of a stack
        length/size - checks the no of items/elements in the stack

  palindrome - is a word that is spelled the same forwards and backwards example - bob,racecar
 */

// let letters = []; // a stack
//
// let word = "racecar";
//
// let rword = "";
//
// // put letters of word into stack
// for (let i = 0; i < word.length; i++){
//     letters.push(word[i]);
// }
//
// // pop off the stack in reverse order
// for (let i = 0; i < word.length; i++){
//     rword += letters.pop();
// }
//
// if (rword === word){
//     console.log(`${word} is a palindrome`)
// }
// else
// {
//     console.log(`${word}  is not a palindrome`)
// }

// create a stack
let Stack = function () {
    this.count = 0;
    this.storage = {};

    // adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.count === 0){
            return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // returns no of items in the stack
    this.size = function () {
        return this.count;
    }

    // returns the value at the end of the stack - returns the last value at the end of stack but does not delete it like pop()
    this.peek = function () {
        return this.storage[this.count-1]
    }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log('peek',myStack.peek());
console.log('pop',myStack.pop());
console.log('peek',myStack.peek());
myStack.push("freecodecamp");
console.log('size',myStack.size());
console.log('peek',myStack.peek());
console.log('pop',myStack.pop());
console.log('peek',myStack.peek());
