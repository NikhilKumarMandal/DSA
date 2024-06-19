
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];


function createGraph(edges) {
    const graph = {}

    for (const edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) {
            graph[a] = []
        }
        if (!(b in graph)) {
            graph[b] = []
        }
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph

}

function shortestPath(edges, start, dist) {
    const graph = createGraph(edges)
    const visited = new Set()
    const queue = [[start, 0]]
    visited.add(start)

    while (queue.length > 0) {
        const [node, distance] = queue.shift()
        if (node === dist) {
            return distance
        }
        for (const neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push([neighbour,distance + 1])
            }
        }
    }
    return -1
}

console.log(shortestPath(edges, 'b', 'a'));
console.log(shortestPath(edges, 'b', 't'));