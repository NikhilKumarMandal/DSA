class BSTNode{
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertion(key) {
        const newNode = new BSTNode(key)
        if (this.root === null) {
            this.root = newNode            
        } else {
            this.insertionNode(this.root,newNode)
        }
    }

    insertionNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertionNode(node.left,newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertionNode(node.right,newNode)
            }
        }
    }

    deletion(key) {
        this.root = this.deletionNode(this.root,key)
    }

    deletionNode(node, key) {
        if (node === null) {
            return null
        } else if (key < node.key) {
            this.deletionNode(node.left,key)
        } else if (key > node.key) {
            this.deletionNode(node.right,key)
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            } else {
                let tempNode = this.findMinValue(node.right)
                node.key = tempNode.key
                node.right = this.deletionNode(node.right,tempNode.key)
            }
        }
        return node
    }
    findMinValue(node) {
        while (node.left !== null) {
            node = node.left
        }
        return node
    }
}
