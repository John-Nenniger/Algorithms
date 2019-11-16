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


// let first = new Node(undefined, 0)
// let second_one = new Node(first, 1)
// let second_zero = new Node(first, 0)
// let third_zero = new Node(second_zero, 0)
// let third_one = new Node(second_zero, 1)
// let fourth_one_one = new Node(third_one, 1)
// let fourth_one_two = new Node(third_one, 1)



/* #3 [Medium] 
    Given the root to a binary tree, implement serialize(root), 
    which serializes the tree into a string, and deserialize(s), 
    which deserializes the string back into the tree.
*/


