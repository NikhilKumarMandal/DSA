
const graph = {
    a: ["b", "c"],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

function biggestIsland(graph) {
    const visited = new Set()
    let largest = 0

    function dfs(node) {
        if (visited.has(node)) {
            return 0
        }

        visited.add(node)
        let size = 1
        for (const neighbour of graph[node]) {
            size += dfs(neighbour)
        }
        return size
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            const componentSize = dfs(node)
            if (componentSize > largest) {
                largest = componentSize
            }
        }
    }

    return largest
}


console.log(biggestIsland(graph));
