const graph = {
    a: ["b", "c"],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

function depthFirstWithIterative(graph, start) {
    const stack = [start]
    const visited = new Set()

    while (stack.length > 0) {
        const node = stack.pop()
        if (!visited.has(node)) {
            visited.add(node)
            for (const neighbour of graph[node]) {
                if (!visited.has(neighbour)) {
                    stack.push(neighbour)
                }
            }
        }
    }
    return visited
}

// function depthFirst(graph,start,visited = new Set()) {
    
//     const stack = [start]

//     while (stack.length > 0) {
//         const node = stack.pop()
//         if (!visited.has(node)) {
//             visited.add(node)
//             for (const neighbour of graph[node]) {
//                 if (!visited.has(neighbour)) {
//                     stack.push(neighbour)
//                 }
//             }
//         }
//     }
//     return visited
// }

// console.log(depthFirstWithIterative(graph, 'a'));

function dfsRecursion(start, graph, visited = new Set()) {
    if (!visited.has(start)) {
        visited.add(start);

        for (const neighbour of graph[start]) {
            dfsRecursion(neighbour, graph, visited);
        }
    }

    return visited;
}

console.log(dfsRecursion('a', graph)); 