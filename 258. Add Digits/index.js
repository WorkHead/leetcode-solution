const addDigits = function(num) {
    while (num >= 10) {
        num = String(num).split('').reduce((pre, cur) => Number(pre) + Number(cur))
    }
    
    return num;
};