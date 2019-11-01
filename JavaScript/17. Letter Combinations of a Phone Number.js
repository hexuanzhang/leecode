/*
 * @Description: 定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合
 * @Address: https://leetcode.com/problems/letter-combinations-of-a-phone-number/ | https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @Author: hexuan.zhang
 * @Date: 2019-10-24 23:39:03
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-01 18:04:00
 */

/**
 * 思路：采用深度优先遍历的思想，递归+循环
 *
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (!digits || Object.is(digits, '')) return [];

    let result = [];
    return getLetterCombinationsByLevel('', 0, digits).split('|').filter(str => str.length);
};

const getLetterCombinationsByLevel = (preStr, level, digits) => {
    const LETTER_MAP = new Map([
        [0, ''],
        [1, ''],
        [2, 'abc'],
        [3, 'def'],
        [4, 'ghi'],
        [5, 'jkl'],
        [6, 'mno'],
        [7, 'pqrs'],
        [8, 'tuv'],
        [9, 'wxyz']
    ]);

    if (Object.is(level, digits.length)) {
        return preStr;
    } else {
        const currentLetters = LETTER_MAP.get(+digits[level]);

        let result = '|';
        for (let i = 0; i < currentLetters.length; i++) {
            result = result + '|' + (getLetterCombinationsByLevel(preStr + currentLetters[i], level + 1, digits));
        }

        return result;
    }
}