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
    var count = 0;
    
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == 1 ) {
                count++;
                helper(grid, i, j);
            }
        }
    }
    
    function helper(grid, x, y) {
        if(x == grid.length || x < 0 || y == grid[x].length || y < 0 || grid[x][y] == 0) return;
        
        grid[x][y] = 0;
        
        // Left
        helper(grid, x, y - 1);
        
        // Right
        helper(grid, x, y + 1);
        
        // Up
        helper(grid, x - 1, y);
        
        // Down
        helper(grid, x + 1, y);
    }
    
    return count;
};

console.log(numIslands([
    [1,1,0,0,0], 
    [1,0,0,1,0],
    [1,1,0,0,0],
    [1,1,0,0,0],
    ]));