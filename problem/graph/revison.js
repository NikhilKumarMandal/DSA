

// const graph = {
//     1: [2, 3],
//     2: [1, 3, 4],
//     3: [1, 2, 4],
//     4: [2, 3],
//     5: [6],
//     6: [5]
// }


// function depathFirst(graph, start, dist) {
    
//     let stack = [start]
//     const visited = new Set()

//     while (stack.length > 0) {
//         const node = stack.pop()
//         if (node === dist) {
//             return true
//         }

//         if (!visited.has(node)) {
//             visited.add(node)
//             for (const neighour of graph[node]) {
//                 stack.push(neighour)
//             }
//         }
//     }

//     return false


// }

// function breathFirst(graph, start, dist) {
    
//     let queue = [start]
//     const visited = new Set()

//     while (queue.length > 0) {
//         const node = queue.shift()

//         if (node === dist) return true;

//         if (!visited.has(node)) {
//             visited.add(node)
//             for (const neighbour of graph[node]) {
//                 queue.push(neighbour)
//             }
//         }
//     }
//     return false

// }

// function recusrsion(graph, start, dist,visited = new Set()) {

//     if (start === dist) {
//         return true
//     }

//     if (visited.has) {
//         return false
//     }

//     visited.add(start)

//     for (const neighbour of graph[start]) {
//         if (recusrsion(graph,neighbour,dist) === true) {
//             return true
//         }
//     }

//     return false

// }


const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


// function createGraph(edges) {
//     const graph = {}

//     for (const edge of edges) {
//         const [a, b] = edge
//         if (!(a in graph)) {
//             graph[a] = []
//         }
//         if (!(b in graph)) {
//             graph[b] = []
//         }
//         graph[a].push(b)
//         graph[b].push(a)
//     }
//     return graph
// }

// function depthFirst(graph, start, dist,visited = new Set()) {
    
//     let stack = [start]

//     while (stack.length > 0) {
//         const node = stack.pop()
//         if (node === dist) {
//             return true
//         }
//         if (!visited.has(node)) {
//             visited.add(node)
//             for (const neighbour of graph[node]) {
//                 stack.push(neighbour)
//             }
//         }
//     }
//     return false
// }

//

const graph = {
    a: ["b", "c"],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

function countIsland(graph) {
    const visited = new Set()
    let count = 0

    function dfs(node) {
        if (!visited.has(node)) {
            visited.add(node)
            for (const neighbour of graph[node]) {
                dfs(neighbour)
            }
        }
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node)
            count++
        }
    }

    return count
}