const add = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let result = '';
    let carry = 0;
    
    while (i >= 0 || j >= 0) {
        const sum = Number(num1[i] || 0) + Number(num2[j] || 0) + carry;
        
        result = `${sum % 10}${result}`;
        carry = parseInt(sum / 10);
        
        i--;
        j--;
    }
    
    if (carry === 1) {
        result = `1${result}`;
    }
    
    return result;
}
const multiply = function(num1, num2) {
    let i = num1.length;
    let j = num2.length;
    let carry = 0;
    let zeros = '';
    const resultArr = [];
    
    if (num1 === '0' || num2 === '0') return '0';
    
    for (let m = i - 1; m >= 0; m--) {
        resultArr[m] = '';

        for (let n = j - 1; n >= 0; n--) { 
            const sum = Number(num1[m]) * Number(num2[n]) + carry;
            
            
            resultArr[m] = `${sum % 10}${resultArr[m]}`;
            carry = parseInt(sum / 10);
        }
        
        if (carry > 0) {
            resultArr[m] = `${carry}${resultArr[m]}`;
            carry = '';
        }
        
        resultArr[m] += zeros;
        zeros += '0';
    }
    
    return resultArr.reduce((pre, cur) => add(pre, cur), '');
};