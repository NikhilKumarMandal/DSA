
const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L']
]

function minGridIsIsland(grid) {
    const row = grid.length
    const clos = grid[0].length
    const visited = new Set()
    let minSize = Infinity
    


    function dfs(r, c) {
        const pos = r + ',' + c
        if (
            r < 0 || r >= row || c < 0 || c >= clos || visited.has(pos) || grid[r][c] === 'W'
        ) {
            return 0
        }

        visited.add(pos);

        let size = 1

        size += dfs(r - 1, c)
        size += dfs(r + 1, c)
        size += dfs(r, c - 1)
        size += dfs(r, c + 1)

        return size
        
    }


    for (let r = 0; r < row; r++) {
        for (let c = 0; c < clos; c++) {
            if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) {
                const size = dfs(r, c)
                if (size < minSize) {
                    minSize = size
                }
            }
            
        }
        
    }

    return minSize

}

console.log(minGridIsIsland(grid));