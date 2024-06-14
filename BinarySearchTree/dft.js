
// class Node {
//   constructor(key){
//     this.key = key;
//     this.left = null
//     this.right = null
//   }
// }

const depthFirstTraversel = function (root) {

    if (root === null) {
        return
    }

    let value = []
    let stack = [root]

    while (stack.length > 0) {
        const node = stack.pop()
        value.push(node.key)

        if (node.right !== null) {
            value.push(node.right)
        }
        if (node.left !== null) {
            value.push(node.left)
        }
    }
    return value
}

const recursionDepthFirstTraversel = function (root) {
     if (root === null) {
        return
    }

    const leftValue = recursionDepthFirstTraversel(root.left)
    const rightValue = recursionDepthFirstTraversel(root.right)

    return [root.key,...leftValue,...rightValue]
}