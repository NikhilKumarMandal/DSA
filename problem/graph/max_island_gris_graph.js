
const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L']
]

function maxGridIsland(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const visited = new Set()
    let maxSize = 0;

    function dfs(r, c) {
        pos = r + ',' + c

        if (
            r < 0 || r >= rows || c < 0 || c >= cols || visited.has(pos) || grid[r][c] === 'W'
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

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) {
                const size = dfs(r, c)
                if (size > maxSize) {
                    maxSize = size
                }
            }
        }
        
    }

    return maxSize
}

console.log(maxGridIsland(grid));