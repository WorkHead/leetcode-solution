const diff = function(str1, str2) {
    if (str1 === str2) return 0;
    
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) count++;   
    }
    
    return count;
}

const minMutation = function(start, end, bank, depth = 0, result = []) {
    if (diff(start, end) === 0) return result.push(depth);

    bank.forEach((gen, index) => {
        if (diff(start, gen) === 1) minMutation(gen, end, bank.filter((_, i) => i !== index), depth + 1, result);
    });

    return result.length > 0 ? Math.min(...result) : -1;
};