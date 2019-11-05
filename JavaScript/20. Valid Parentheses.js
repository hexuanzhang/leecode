/*
 * @Description: 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效
 * @Address: https://leetcode.com/problems/valid-parentheses/ | https://leetcode-cn.com/problems/valid-parentheses/
 * @Author: hexuan.zhang
 * @Date: 2019-11-05 20:48:57
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-05 23:18:57
 */

/**
 * 思路：通过栈来解决，碰到左括号符放入数组，碰到右括号符和数组最后一个括号符匹配，如果能匹配能将最后一个括号符出栈，反之则说明是无效的
 *
* @param {string} s
* @return {boolean}
*/
const isValid = (s) => {
    const PARENTHESE_MAP = new Map([['(', ')'], ['{', '}'], ['[', ']']]);

    const charArray = s.split('');

    let tmp = [];
    for (let i = 0; i < charArray.length; i++) {
        const char = charArray[i];

        if (PARENTHESE_MAP.keys.includes(chartArray)) {
            tmp.push(char);
        } else {
            const lastChar = tmp[tmp.length - 1];
            if (Object.is(PARENTHESE_MAP.get(lastChar), char)) {
                tmp.pop();
            }
        }
    }

    return tmp.length < 1;
};