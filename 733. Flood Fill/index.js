const floodFill = function(image, sr, sc, newColor, lastColor) {
    if (image[sr] === undefined || image[sr][sc] === undefined) return;
    
    if (lastColor === undefined) {
        lastColor = image[sr][sc];
        image[sr][sc] = newColor;
    } else if (image[sr][sc] === lastColor && lastColor !== newColor) {
        image[sr][sc] = newColor;
    } else {
        return;
    }

    floodFill(image, sr, sc + 1, newColor, lastColor);
    floodFill(image, sr + 1, sc, newColor, lastColor);
    floodFill(image, sr, sc - 1, newColor, lastColor);
    floodFill(image, sr - 1, sc, newColor, lastColor);
    
    return image;
};