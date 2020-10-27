// A maze is given as a N*N matrix of integers where 0 represents an empty path and 1 represents a wall. 
// (0,0) is the position in the upper left corner, and (n-1, n-1) is in the bottom right.
// Given a starting position and the position of the exit write a program that will search for and find the exit. 

// Example signature: FindMazeExit(Int[][] Maze, int StartX, int StartY, int EndX, int EndY)

// Example maze:
// 0 0 1 0
// 1 0 1 0
// 0 0 1 0
// 1 0 0 0

// Start: (0,0) End: (0,3)

function ratInAMaze(maze, startRow, startCol, endRow, endCol) {
    
    var path = [];
    
    function findPath(row, col) {
        
        if (row === endRow && col === endCol) {
            
            path.push([row, col]);
            maze[row][col] = 2;
            
            return true;
        }

        if (row < 0 || col < 0 || row > maze.length - 1 || col > maze[0].length - 1 || maze[row][col] !== 0) {
            return false;
        }

        maze[row][col] = 2;
        path.push([row, col]);
        
        if (findPath(row - 1, col)) {
            return true;
        }
        
        if (findPath(row, col + 1)) {
            return true;
        }
        
        if (findPath(row + 1, col)) {
            return true;
        }
        
        if (findPath(row, col - 1)) {
            return true;
        }
        
        path.pop();
        maze[row][col] = 0;
        
        return false;
    }

    if (findPath(startRow, startCol)) {
        console.log(maze);
        return path;
    }

    return 'NO PATH FOUND';
    
}


const maze = [
    [0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0]
];

console.log(ratInAMaze(maze, 2, 4, 4, 5));