/*
 -- https://codepen.io/beaucarnes/pen/JNvENQ?editors=0010
    Binary Heap - is a partially ordered binary tree which satisfies the heap property
    Each node has at most 2 child nodes.
    Max Heap - All parent nodes are greater than or equal to the child nodes
    Min Heap - All child nodes are greater than or equal to the parent nodes

    ** its index starts from 1 - [1,2,3], instead of the normal array 0 - [0,1,2,3]
 */

/*
    Left Child: ----- i * 2
    Right Child:  --- i * 2 + 1
    Parent: --------- i/2
 */

let minHeap = function () {

    let heap = [null];

    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] < heap[Math.floor(idx/2)]){
                if (idx >= 1){
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], [Math.floor(idx/2)]];
                    if (Math.floor(idx/2) >  1){
                        idx = Math.floor(idx/2)
                    }else {
                        break;
                    }
                }
            }
        }
    };

    this.remove = function () {
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1]; // get the last item in the heap/array
            heap.splice(heap.length - 1);
            if (heap.length === 3){
                if (heap[1] > heap[2]){
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return smallest;
            };
            let i = 1;
            let left =  2 * i;
            let right = 2 * i + 1;
            while (heap[i] >= heap[left] || heap[i] >= heap[right])
            {
                if (heap[left] < heap[right]){
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * 1;
                }else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * 1 + 1;
                };
                let left =  2 * i;
                let right = 2 * i + 1;
                if (heap[left] === undefined || heap[right] === undefined){
                    break;
                }
            }
        } else if (heap.length === 2) {
            heap.slice(1,1);
        }else {
            return null;
        };
        return smallest;
    };

    this.sort = function () {
        let result = new Array();
        while (heap.length > 1) {
            result.push(this.remove())
        };
        return result;
    };

};

let maxHeap = function () {

    let heap = [null];

    this.print = () => heap;

    this.insert = function (num) {
        heap.push(num);
        if (heap.length > 2) {
            let idx = heap.length - 1;
            while (heap[idx] > heap[Math.floor(idx/2)]){
                if (idx >= 1){
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], [Math.floor(idx/2)]];
                    if (Math.floor(idx/2) >  1){
                        idx = Math.floor(idx/2)
                    }else {
                        break;
                    }
                }
            }
        }
    };

    this.remove = function () {
        let smallest = heap[1];
        if (heap.length > 2) {
            heap[1] = heap[heap.length - 1]; // get the last item in the heap/array
            heap.splice(heap.length - 1);
            if (heap.length === 3){
                if (heap[1] < heap[2]){
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                };
                return smallest;
            };
            let i = 1;
            let left =  2 * i;
            let right = 2 * i + 1;
            while (heap[i] <= heap[left] || heap[i] >= heap[right])
            {
                if (heap[left] > heap[right]){
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * 1;
                }else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * 1 + 1;
                };
                let left =  2 * i;
                let right = 2 * i + 1;
                if (heap[left] === undefined || heap[right] === undefined){
                    break;
                }
            }
        } else if (heap.length === 2) {
            heap.slice(1,1);
        }else {
            return null;
        };
        return smallest;
    };

    // this.sort = function () {
    //     let result = new Array();
    //     while (heap.length > 1) {
    //         result.push(this.remove())
    //     };
    //     return result;
    // };

};
