function canExit(maze) {
    const numRows = maze.length;
    const numCols = maze[0].length;

    // Helper function to check if a given position is valid
    const isValidPosition = (row, col) => {
        return row >= 0 && row < numRows && col >= 0 && col < numCols && maze[row][col] === 0;
    };

    // Create a queue 
    const queue = [];
    const visited = new Set();

    // Start at the upper left corner
    queue.push([0, 0]);
    visited.add('0,0');

    while (queue.length > 0) {
        const [row, col] = queue.shift();

        // Check if we reached the bottom right corner
        if (row === numRows - 1 && col === numCols - 1) {
            return true;
        }

        // Move in all possible directions (up, down, left, right)
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (isValidPosition(newRow, newCol) && !visited.has(`${newRow},${newCol}`)) {
                queue.push([newRow, newCol]);
                visited.add(`${newRow},${newCol}`);
            }
        }
    }

    return false;
}

const maze1 = [
    [0, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0]
];

const maze2 = [
    [0, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 1]
];

const maze3 = [
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0]
];

const result1 = canExit(maze1);
const result2 = canExit(maze2);
const result3 = canExit(maze3);
console.log(result1);