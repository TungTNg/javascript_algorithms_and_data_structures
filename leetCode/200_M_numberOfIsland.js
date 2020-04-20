// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numIslands = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == '1') {
                numIslands++;
                dfs(i, j);
            }
        }
    }
    
    return numIslands;
    
    function dfs(row, column) {
        if(row < 0 || row > grid.length - 1 || column < 0 || column > grid[row].length - 1 || grid[row][column] == '0') {
            return;
        }
        
        grid[row][column] = '0';
        
        // go left
        dfs(row, column - 1,);
        
        // go top
        dfs(row - 1, column);
        
        // go right
        dfs(row, column + 1);
        
        // go bottom
        dfs(row + 1, column);
    }
};

const grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
    ];

console.log(numIslands(grid1));

const grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
    ];

console.log(numIslands(grid2));