class BSTNode {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    
    delete(key) {
        this.root = this.deleteNode(this.root,key)
    }

    deleteNode(node, key) {
        if (node === null) {
            return null
        }

        if (node.key < key) {
            node.left = this.deleteNode(node.left,key)
        } else if (node.key > key) {
            node.right = this.deleteNode(node.right,key)
        } else {
            if (node.left === null && node.right === null) {
                return null
            } else if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.right
            } else {
                const tempNode = this.findMaxValue(node.left)
                node.key = tempNode.key
                this.deleteNode(node.left,tempNode.key)
            }
        }
        return node
    }

    findMaxValue(node) {
        while (node.right !== null) {
            node = node.right
        }    
        return node
    }

   
}