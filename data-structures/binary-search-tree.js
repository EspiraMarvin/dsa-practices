/*
    Nodes- are all data points in the tree
    Root node - is the node on top of a tree
    Parent node-  are nodes with branches leading to other nodes
    leaf node -  are nodes end of the tree with no children
    Any children of a node are parents of their own subtree
    A binary tree - has 2 branches for every node
    - Binary search tree are ordered - each subtree is less than or equal to the parent node.
    - And each right subtree is greater than or equal to the parent node
    -min Height - is the distance from the root node to the 1st leaf node without 2 children(only one child; either right or left node)
    -max Height - is the distance from the root node to the most bottom node
    Balance Binary Tree- the values between the minH and maxH is different by 1 at most.
NOTE- is slower than hash table but faster than finding time using 'key' in an unsorted array
// Traversal via a binary tree search
inOrder
postOrder(breadth first)
postOrder
levelOrder
 */

class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// BINARY SEARCH TREE
class BST{
    constructor() {
        this.root = null;
    }
    add(data){
        const node = this.root;
        if (node === null){
            this.root = new Node(data);
            return;
        }else {
            const searchTree = function (node) {
                if (data < node.data){
                    if (node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if (node.left != null){
                        return searchTree(node.left)
                    }
                }else if (data > node.data){
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if (node.right != null){
                        return searchTree(node.right);
                    }
                }else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    // find min
    findMin() {
        let current = this.root;
        while (current.left != null){
            current = current.left;
        }
        return current.data
    }

    // find max
    findMax() {
        let current = this.root;
        while (current.right != null){
            current = current.right;
        }
        return current.data;
    }

    // find data
    find(data){
        let current = this.root;
        while (current.data != data){
            if (data < current.data){
                current = current.left
            }else {
                current = current.right;
            }
            if (current === null){
                return null;
            }
        }
        return current;
    }

    // find if item is present
    isPresent(data){
        let current = this.root
        while(current){
            if (data === current.data){
                return true;
            }
            if (data < current.data){
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data){
       const removeNode = function (node, data) {
           if (node === null){
               return null;
           }
           if (data === node.data){
               // node has no children
               if (node.left === null && node.right === null){
                   return null;
               }
               // node has no left child
               if (node.left === null) {
                   return node.right;
               }
               //node has no right child
               if (node.right === null){
                   return node.left;
               }
               // node has two children
               let tempNode = node.right;
               while (tempNode.left != null){
                   tempNode = tempNode.left
               }
               node.data = tempNode.data;
               node.right = removeNode(node.right, tempNode.data)
               return node;
           }else if (data < node.data){
               node.left = removeNode(node.left, data);
               return node
           }else {
               node.right = removeNode(node.right, data);
               return node;
           }
       }
       this.root = removeNode(this.root, data)
    }
    //find min height
    findMinHeight(node = this.root){
        if (node == null){
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right){
            return left + 1;
        }else {
            return right + 1;
        }
    }
    //find max height
    findMaxHeight(node = this.root){
        if (node == null){
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left > right){
            return left + 1;
        } else {
            return right + 1;
        }
    }

    // is tree balanced
    isBalanced(){
        return (this.findMinHeight() >= this.findMinHeight() -1)
    }

    // inOrder transversal
    inOrder(){
        if (this.root === null){
            return null;
        }else {
            let result = new Array();
            function transverseInOrder(node) {
                node.left && transverseInOrder(node.left);
                result.push(node.data);
                node.right && transverseInOrder(node.right);
            }
            transverseInOrder(this.root);
            return result;
        };
    }

    //preOrder transversal
    preOrder(){
        if (this.root == null){
            return null;
        }else {
            let result = new Array();
            function transversePreOrder(node) {
                result.push(node.data);
                node.left && transversePreOrder(node.left);
                node.right && transversePreOrder(node.right);
            }
            transversePreOrder(this.root)
            return result;
        }
    }

    //postOrder transversal
    postOrder(){
        if (this.root == null){
            return null;
        }else {
            let result = new Array();
            function transversePostOrder(node) {
                node.left && transversePostOrder(node.left);
                node.right && transversePostOrder(node.right);
                result.push(node.data);
            };
            transversePostOrder(this.root);
            return result;
        }
    }

    //levelOrder transversal
    levelOrder(){
        let result = [];
        let Q = [];
        if (this.root !== null){
            Q.push(this.root);
            while(Q.length > 0){
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null){
                    Q.push(node.left);
                };
                if (node.right != null){
                    Q.push(node.right);
                };
            };
            return result;
        }else {
            return null;
        }
    }

}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());
