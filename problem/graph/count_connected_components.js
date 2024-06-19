

const graph = {
    a: ["b", "c"],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}


function connectGraph(graph) {
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

console.log(connectGraph(graph));