class Node {
    constructor(value, left, right) {
        this.left = left
        this.right = right
        this.value = value
        this.parent = undefined
    }

    
    has_parent(node) {
        if (self.parent == undefined) {
            return false
        } else if (self.parent == node) {
            return true
        } else {
            return this.parent.has_parent(node)
        }
    }
}


module.exports = Node