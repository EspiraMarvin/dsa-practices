/*
 SET- is like an array but they have no duplicate items
  and values are not in any particular order.
  -Typically its used to check for a presence of an item
*/

function mySet() {
    // var collection will hold the set
    let collection =[];
    // this method will check for the presence of an element and return true(if its there) or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    };

    // this method will return all the values in the set
    this.values = function () {
        return collection;
    };

    // this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };

    //this method will remove an element from a set
    this.remove = function (element) {
        if (this.has(element)){
            index = collection.indexOf(element)
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    // this method will return the size of the collection
    this.size = function () {
        return collection.length;
    };

    // this method will return the union of two sets (combines the sets but leave out any duplicate items from the sets)
    // add() method does not add value if it's a duplicate
    this.union = function (otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e)
        });
        secondSet.forEach(function (e) {
            unionSet.add(e)
        });
        return unionSet;
    };

    // this method will return the intersection of two sets as a new set
    // (all the items that are in both sets)
    this.intersection = function (otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet
    };

    // this method will return the difference of two sets as a new set
    // (all the items that are in one set but no the other set)
    this.difference = function (otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)){
                differenceSet.add(e)
            }
        });
        return differenceSet
    };

    // this method will test if the set is a subset of a different set
    // checks if the 1st set is completely contained in the second set
    this.subset = function (otherSet) {
        let firstSet = this.values();
        return firstSet.every(function (value) {
            return otherSet.has(value);
        })
    };
}

let setA = new mySet();
let setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

// using inbuilt set
let setC = new mySet();
let setD = new mySet();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log('inbuild', setD.values());
// setD.remove("a")
// console.log(setD.has("a"))
console.log(setD.add("d"));
console.log('inbuild', setD.values());
setD.remove("d");
console.log('inbuild', setD.values());
