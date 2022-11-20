/*
HashTable / Map
Hash Table - a good example is with map function in js
 */

let hash = (string, max) => {
    let hash = 0;
    for (var i = 0; i< string.length; i++){
        hash += string.charCodeAt(i)
    }
};

let HashTable = function () {
    let storage = [];
    const storageLimit = 4;

    this.print = function () {
        console.log(storage)
    };

    this.add = function (key, value) {
        let index = hash(key, storageLimit);
        if (storage[index] === undefined){
            storage[index] = [[key, value]];
        }else {
            let inserted = false;
            for (var i =0; i < storage[index].length; i++){
                if (storage[index][i][0] === key){ // 0 refers to key
                    storage[index][i][1] = value; // 1 refers to value
                    inserted = true;
                }
            }
            if (inserted === false){
                storage[index].push([key, value]);
            }
        }
    };
    // remove
    this.remove = function (key) {
        let index = hash(key, storageLimit);
        if (storage[index].length ===1 && storage[index][0][0] === key){
            delete storage[index];
        }else {
            for (var i = 0; i < storage[index].length; i++){
                if (storage[index][i][0] === key){
                    delete storage[index][i];
                }
            }
        }
    };
    // lookup (search)
    this.lookup = function (key) {
        let index = hash(key, storageLimit);
        if (storage[index] === undefined){
            return undefined;
        }else{
            for (let i = 0; i < storage[index].length; i++){
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };

};

console.log(hash('quincy', 10));

let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin');
console.log('lookup for tux key',ht.lookup('tux'));
console.log('lookup for beau key',ht.lookup('beau'));

ht.print();

