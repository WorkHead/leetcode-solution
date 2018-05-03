// 对已计算过的结果做缓存
let solutionMap;

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    solutionMap = new Map();
    // 调用递归计算方法
    return solution(m - 1, n - 1, obstacleGrid);
};

// 走到坐标为(x, y)有多少种走法
function solution(x, y, obstacleGrid) {
    const isObstacle = obstacleGrid[x][y] === 1;
    
    // 边缘情况处理
    // 当前格子是障碍物，直接返回0
    if (isObstacle) return 0;
    
    // (1, 0)和(0, 1)的情况
    if ((x === 0 && y === 1) || (x === 1 && y === 0)) return 1 - obstacleGrid[0][0];
    
    // (0, 0)的情况
    if (x === 0 && y === 0) return 1;

    // 非障碍物，递归计算
    // 到左面一格的走法数量
    const leftSolution = y - 1 >= 0 ? getSolution(x, y - 1, obstacleGrid) : 0;

    // 到上面一格的走法数量
    const topSolution = x - 1 >= 0 ? getSolution(x - 1, y, obstacleGrid) : 0;

    const result = topSolution + leftSolution;

    // 设置缓存
    solutionMap.set(x + '' + y, result);

    return result;
}

// 判断若在缓存中出现，则直接返回缓存结果，否则调用solution方法计算
function getSolution(x, y, obstacleGrid) {
    return solutionMap.get(x + '' + y) || solution(x, y, obstacleGrid);
}