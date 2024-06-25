const graph = {
    a: ["b", "c"],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}


function breadthFirstIterative(graph, start) {
    const queue = [start];
    const visited = new Set();
    visited.add(start);  

    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbour of graph[node]) {  
            if (!visited.has(neighbour)) { 
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }
    return visited;
}

console.log(breadthFirstIterative(graph, 'a')); 


// function breathFirst(graph, start, visited = new Set()) {
    
//     let queue = [start]
//     visited.add(start)
    

//     while (queue.length > 0) {
//         const node = queue.shift()
//         for (const neighbour of graph[node]) {
//             if (!visited.has(neighbour)) {
//                 visited.add(neighbour)
//                 queue.push(neighbour)
//             }
//         }
        
//     }

//     return visited
// }