/*

const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

const graph = {
  b: [a],
  a: [b]
}

loop => check if DOES NOT exist, then add key => push both nodes

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.

*/

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

function depthFirst(graph, start, dest,visited = new Set()) {
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();
        if (node === dest) {
            return true;
        }
        if (!visited.has(node)) {
            visited.add(node);
            for (const neighbour of graph[node]) {
                stack.push(neighbour);
            }
        }
    }
    return false;
}

function finalFunctionBundle(edges, start, dist) {
    const graph = createGraph(edges)
    return depthFirst(graph,start,dist)
}

console.log(finalFunctionBundle(edges, 'b', 'a')); 
console.log(finalFunctionBundle(edges, 'a', 'r')); 