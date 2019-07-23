const operate = function(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return parseInt(a / b);
        default:
            return;
    }
}
const calculate = function(s) {
    const reg = /^(\s?\-?\d+\s?)(\+|\-|\*|\/)(\s?\d+\s?)(\+|\-|\*|\/)?(\s?\d+)?/;
    const operatorReg = /\+|\-|\*|\//;
    
    while (+s !== +s) {
        s = s.replace(reg, (match, $1, $2, $3, $4, $5) => {
            if (!$4 && !$5) {
                return operate(+$1, +$3, $2);
            } else {
                if (/\*|\//.test($4) && !/\*|\//.test($2)) {
                    return `${$1}${$2}${operate(+$3, +$5, $4)}`;
                } else {
                    return `${operate(+$1, +$3, $2)}${$4}${$5}`;
                }
            }
        });
    }
    
    return +s;
};