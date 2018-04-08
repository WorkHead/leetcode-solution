/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const cleanStr = [...new Set(s)].join('');
    let cleanStrLen = cleanStr.length;

    while (cleanStrLen) {
        for (let i = 0; i <= s.length - cleanStrLen; i++) {
            const subStr = s.substr(i, cleanStrLen);

            if (!subStr.split('').some((char, i) => subStr.indexOf(char) !== i)) {
                return cleanStrLen;
            }
        }

        cleanStrLen--;
    }

    return 0;   
};


console.log(lengthOfLongestSubstring('pwwkew'))