class BSTNode {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

// class BinarySearchTree {
//     constructor() {
//         this.root = null
//     }

//     insert(key) {
//         const newNode = new BSTNode(key)
//         if (node === null) {
//             this.root= newNode
//         } else {
//             this.insertNode(this.root,key)
//         }
//     }

//     insertNode(node, key) {
//         if (newNode.key < node.key) {
//             if (node.left === null) {
//                 node.left = newNode
//             } else {
//                 this.insertNode(node.left,key)
//             }
//         } else {
//             if (node.right === null) {
//                 node.right = newNode
//             } else {
//                 this.insertNode(node.right,key)
//             }
//         }
//     }

    
//     delete(key) {
//         this.root = this.deleteNode(this.root,key)
//     }

//     deleteNode(node, key) {
//         if (node === null) {
//             return null
//         }

//         if (node.key < key) {
//             node.left = this.deleteNode(node.left,key)
//         } else if (node.key > key) {
//             node.right = this.deleteNode(node.right,key)
//         } else {
//             if (node.left === null && node.right === null) {
//                 return null
//             } else if (node.left === null) {
//                 return node.right
//             } else if (node.right === null) {
//                 return node.right
//             } else {
//                 const tempNode = this.findMaxValue(node.left)
//                 node.key = tempNode.key
//                 this.deleteNode(node.left,tempNode.key)
//             }
//         }
//         return node
//     }

//     findMaxValue(node) {
//         while (node.right !== null) {
//             node = node.right
//         }
//         return node
//     }
// }

function depthFirst(root) {
    
    if (root === null) {
        return
    }

    let stack = [root]
    let value = []

    while (stack.length > 0) {
        const node = stack.pop()
        value.push(node)

        if (root.right !== null) {
            depthFirst(root.right)
        }
        if (root.left !== null) {
            depthFirst(root.left)
        }
    }
    return value

}

function depthFirstRec(root) {
    
    if (root === null) {
        return
    }

    leftValue = depthFirstRec(root.left)
    rightValue = depthFirstRec(root.right)

    return [root.key,...leftValue,...rightValue]
}

function breathFirst(root) {

    if (root === null) {
        return
    }
    const queue = [root]
    const value = []
    
    while (queue.length > 0) {
        const node = queue.shift()
        queue.push(node)

        if (root.left !== null) {
            breathFirst(root.left)
        }

        if (root.right !== null) {
            breathFirst(root.right)
        }
    }

    return value
    

}