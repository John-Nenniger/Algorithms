// #8 [Easy] Given the root to a binary tree, count the number of unival subtrees #2.
// First I need to implement a simple node class in Javascript
const l = console.log


class Node {
    constructor(left, right, value){
        this.left = left
        this.right = right
        this.value = value
    }

}

function isUnival(node){
    if(!node.left && !node.right){
        return true
    } else if (node.left.value == node.value && node.right.value == node.value) {
        return isUnival(node.left) && isUnival(node.right)
    }
    return false
};

function countUnival(node, univalCount = 0) {
    if (isUnival(node)) {
        univalCount += 1
    }

    return (
        univalCount +
        (node.left ? countUnival(node.left) : 0) + 
        (node.right ? countUnival(node.right) : 0)
    )
}


/* Build the data structure in the example: 
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

*/


// first node 
let a = new Node(undefined, undefined, 1)
let b = new Node(undefined, undefined, 1)
let c = new Node(undefined, undefined, 0)
let d = new Node(b, a, 1)
let e = new Node(d, c, 0)
let f = new Node(undefined, undefined, 1)
let g = new Node(f, e, 0)


l(isUnival(a)) // true
l(isUnival(b)) // true
l(isUnival(c)) // true
l(isUnival(d)) // true
l(isUnival(e)) // false
l(isUnival(f)) // true
l(isUnival(g)) // false


l(countUnival(g)) // 5
l(countUnival(a)) // 1
l(countUnival(b)) // 1
l(countUnival(c)) // 1
l(countUnival(d)) // 3

// ^ works but is slow.  Now i'll try in a way that only evaluates each node once
// first I need to get all of the leaves and start from there

/* Build the data structure in the example: 
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

*/

function getLeaves(node){
    if (!node.left && !node.right){
        return node
    } else if(node.left && node.right){
        return [getLeaves(node.left), getLeaves(node.right)].flat()
    } else if (node.left && !node.right){
        return getLeaves(node.left)
    } else if (node.right && !node.left) {
        return getLeaves(node.right)
    }
}

l(getLeaves(g))

// While the above function works in that it gets all the leaves given a root,
// it defeats the purpose because it requires us to recusively get to all the leaves
// before we even start counting unival subtrees. 

// to properly implement the solution which starts at the leaves, we actually
// have to create a new data structure that starts at the leaves.  I'll try that below


class Noode{
    constructor(root, value){
        this.root = root,
        this.value = value            
    }
}

/* Build the data structure in the example: 
   0 ///  alpha
  / \
 1   0 // beta, gamma
    / \
   1   0 // delta , epsilon
  / \
 1   1 // zeta, eta

*/

const alpha = new Noode(undefined, 0)
const beta = new Noode(alpha, 1)
const gamma = new Noode(alpha, 0)
const delta = new Noode(gamma, 1)
const epsilon = new Noode(gamma, 0)
const zeta = new Noode(delta, 1)
const eta = new Noode(delta, 1)


// I'm having trouble here because I still don't really have access to all the leaves..










/* #3 [Medium] 
    Given the root to a binary tree, implement serialize(root), 
    which serializes the tree into a string, and deserialize(s), 
    which deserializes the string back into the tree.
*/


