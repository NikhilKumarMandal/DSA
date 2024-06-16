class BSTNode {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new BSTNode(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left,newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right,newNode)
            }
        }
    }

    delete(key) {
        this.root = this.deleteNode(this.root,key)
    }

    deleteNode(node, key) {
        if (key < node.key) {
            node.left = this.deleteNode(node.left,key)
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right,key)
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
                this.deleteNode(node.right,tempNode.key)
            }
        }
        return node
    }

    findMinValue(node) {
        while (node.left) {
            node = node.left
        }
        return node
    }

    //print tree
    printTree(node = this.root, space = 0, level = 0) {
        if (node !== null) {
            space += level;
            this.printTree(node.right, space);
            console.log(' '.repeat(space - level) + node.key);
            this.printTree(node.left, space);
        }
    }

    inorder() {
        let result = []
        this.inOrder(this.root, result)
        return result
    }

    inOrder(node, result) {
    if (node === null) {
        return;
    }
    this.inOrder(node.left, result);
    result.push(node.key);
    this.inOrder(node.right, result);
    }

    preorder() {
    let result = [];
    this.preOrder(this.root, result);
    return result;
    }

    preOrder(node, result) {
    if (node === null) {
        return;
    }
    result.push(node.key);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    }

    postorder() {
    let result = [];
    this.postOrder(this.root, result);
    return result;
}

    postOrder(node, result) {
    if (node === null) {
        return;
    }
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.key);
    }



}

const mybstTree = new BinarySearchTree()
mybstTree.insert(5);
mybstTree.insert(67);
mybstTree.insert(7);
mybstTree.insert(2);
mybstTree.insert(4);
mybstTree.insert(6);
mybstTree.insert(8);

mybstTree.delete(4)

// Print the tree
mybstTree.printTree();



