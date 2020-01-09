// Given a binary tree, return an array for each possible root -> leaf strand
const l = console.log

// class Node {
//     constructor(value, left, right) {
//         this.left = left
//         this.right = right
//         this.value = value
//     }

// }

/* three laws of recursion:

1) A recursive algorithm must have a base case.
2) A recursive algorithm must change its state and move toward the base case.
3) A recursive algorithm must call itself, recursively.

*/

// const a = new Node(5)
// const b = new Node(4)
// const c = new Node(3, b, a)
// const d = new Node(2)
// const e = new Node(1, d, c)


// function getStrands(node, strands = [], partialStrand = []){
//     partialStrand.push(node.value)
//     if(!node.left && !node.right){
//         strands.push(partialStrand)
//         return strands
//     } else if(node.left && node.right){
//         return getStrands(node.left, strands,partialStrand)
//         getStrands(node.right, partialStrand)
//     } else if(node.right){
//         getStrands(node.right, partialStrand)
//     } else if (node.left){ 
//         getStrands(node.left, partialStrand)
//     } else {
//         throw("something weird happened, I donno...")
//     }
// }



// Giving it another try by adding a "parent" instance method to nodes ad well

class Node {
    constructor(value, left, right, parent) {
        this.left = left
        this.right = right
        this.value = value
        this.parent = parent
    }

}

const five = new Node(5)
const four = new Node(4)
const three = new Node(3, four, five)
const two = new Node(2)
const one = new Node(1, two, three)

two.parent = one
three.parent = one
four.parent = three
five.parent = three


function getStrands(node, strands = []){
    if (!node.left && !node.right) {
        strands.push(getStrand(node))
        return strands
    } else if (node.left && node.right){
        return [...getStrands(node.left), ...getStrands(node.right, strands)]
    } else if (node.left){
        return getStrands(node.left, strands)
    } else if (node.right){
        return getStrands(node.right, strands)
    }
}


function getStrand(node, partialStrand = []){
    partialStrand.push(node.value)
    if(!node.parent){
        return partialStrand
    } else {
        return getStrand(node.parent, partialStrand)
    }
}

l(getStrands(one))