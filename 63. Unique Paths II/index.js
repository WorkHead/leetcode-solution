/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // 存放到达每一格的路线数量
    const solutionMap = [];
    
    for (let i = 0; i < m; i++) {
        if (!solutionMap[i]) solutionMap[i] = [];
        for (let j = 0; j < n; j ++) {
            if (i === 0 && j === 0) {
                solutionMap[0][0] = 1 - obstacleGrid[0][0];
            } else {
                if (obstacleGrid[i][j]) {
                    solutionMap[i][j] = 0;
                } else {
                    solutionMap[i][j] = 
                        (i >= 1 ? solutionMap[i - 1][j] : 0) 
                        + (j >= 1 ? solutionMap[i][j - 1] : 0);
                }
            }
        }
    }

    return solutionMap[m - 1][n - 1];
};