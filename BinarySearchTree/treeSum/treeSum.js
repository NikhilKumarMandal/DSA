//breadth


function treeSunUsingBreadth(root){

    if (root === null) {
        return 0
    }
    let queue = [root]
    let sum = 0

    while (queue.length > 0) {
        const node = queue.shift()
        sum += node.key
        if (node.left !== null) {
            queue.push(node.left)
        }
        if (node.right !== null) {
            queue.push(node.right)
        }
    }
}


//depth

function treeSumWithDepth(root) {
    if (root === null) {
        return null
    }

    return node.key + treeSumWithDepth(node.left) + treeSumWithDepth(node.right)
}
