/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Input: [[2,1,1],
        [1,1,0],
        [0,1,1]]
Output: 4

Input: [[2,1,1],
        [0,1,1],
        [1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
*/

var orangesRotting = function(grid) {
    var freshOranges = 0;
    var rottenOranges = [];
    var minutes = 0;
    
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i].length; j++) {
            if(grid[i][j] == 1) {
                freshOranges++;
            } else if(grid[i][j] == 2) {
                rottenOranges.push([i, j]);
            }
        }
    }
    
    // Direction: Left, Up, Right, Down
    var direction = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    
    while(rottenOranges.length > 0 && freshOranges > 0) {
        var nextBatchRottenOranges = [];
        
        while(rottenOranges.length > 0) {
            var curRotOrange = rottenOranges.pop();
            var curRotOrangeRow = curRotOrange[0];
            var curRotOrangeCol = curRotOrange[1];
            for(var i = 0; i < direction.length; i++) {
                var neighborRow = curRotOrangeRow + direction[i][0];
                var neighborCol = curRotOrangeCol + direction[i][1];
                
                if(neighborRow < 0 || neighborRow > grid.length - 1 || neighborCol < 0 || neighborCol > grid[0].length - 1 || grid[neighborRow][neighborCol] !== 1) {
                    continue;
                }

                grid[neighborRow][neighborCol] = 2;
                freshOranges--;
                nextBatchRottenOranges.push([neighborRow, neighborCol]);
            }
        }
        
        minutes++;
        rottenOranges = nextBatchRottenOranges;
    }
    
    if(freshOranges == 0) {
        return minutes;
    } else {
        return -1;
    }
    
};

/*
Time Complexity: O(N), where N is the size of the grid.

First, we scan the grid to find the initial values for the queue, which would take O(N) time.

Then we run the BFS process on the queue, which in the worst case would enumerate all the cells in the grid once and only once. Therefore, it takes O(N) time.

Thus combining the above two steps, the overall time complexity would be O(N) + O(N) = O(N)

Space Complexity: O(N), where N is the size of the grid.

In the worst case, the grid is filled with rotten oranges. As a result, the queue would be initialized with all the cells in the grid.

By the way, normally for BFS, the main space complexity lies in the process rather than the initialization. For instance, for a BFS traversal in a tree, at any given moment, the queue would hold no more than 2 levels of tree nodes. Therefore, the space complexity of BFS traversal in a tree would depend on the width of the input tree.
*/

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));