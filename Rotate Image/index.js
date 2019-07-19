const rotate = function(matrix) {
    const n = matrix.length;
    const layer = parseInt(n / 2);
    
    for (let i = 0; i < layer; i++) {
        for (let j = 0; j < n - 2 * i - 1; j++) {
            let temp = matrix[i + j][i];
            matrix[i + j][i] = matrix[n - i - 1][i + j];
            matrix[n - i - 1][i + j] = matrix[n - i - j - 1][n - i - 1];
            matrix[n - i - j - 1][n - i - 1] =  matrix[i][n - i - j - 1];
            matrix[i][n - i - j - 1] = temp;
        }
    }
};