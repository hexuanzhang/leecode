/*
 * @Description: 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效
 * @Address: https://leetcode.com/problems/valid-parentheses/ | https://leetcode-cn.com/problems/valid-parentheses/
 * @Author: hexuan.zhang
 * @Date: 2019-11-05 20:48:57
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-06 11:53:59
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

    let stack = [];
    for (let i = 0; i < charArray.length; i++) {
        const char = charArray[i];

        if ([...PARENTHESE_MAP.keys()].includes(chartArray)) {
            stack.push(char);
        } else {
            const lastChar = stack[stack.length - 1];
            if (Object.is(PARENTHESE_MAP.get(lastChar), char)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length < 1;
};


const isValid = (s) => {
    const LEFT_PARENTHESES = ['(', '{', '['].map(chat => chat.charCodeAt(0)); // 左括号（(、{、[） 对应的 Ascll 码
    const RIGHT_PARENTHESES = [')', '}', ']'].map(chat => chat.charCodeAt(0)); // 右括号（)、}、]）对应的 Ascll 码

    let stack = [];
    for (let index in s) {
        const chatCode = s[index].charCodeAt(0);

        if (LEFT_PARENTHESES.includes(chatCode)) {
            stack.push(chatCode);
        } else {
            const lastChatCode = stack[stack.length - 1];

            if (!lastChatCode) return false;

            if (Object.is(LEFT_PARENTHESES.indexOf(lastChatCode), RIGHT_PARENTHESES.indexOf(chatCode))) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length < 1;
}