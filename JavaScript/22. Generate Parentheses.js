/*
 * @Description: 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 * @Address: https://leetcode.com/problems/generate-parentheses/ | https://leetcode-cn.com/problems/generate-parentheses/
 * @Author: hexuan.zhang
 * @Date: 2019-11-28 09:47:38
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-28 18:44:53
 */

/**
 * 思路：采用递归的形式进行，重点是要判断左括号、右括号的加入时机
 *  1. 剩余左括号数大于 0 时，可以加入左括号
 *  2. 剩余右括号数大于 0 且多于剩余左括号数时（注意不能等于），才能加入右括号
 *  3. 没有剩余的左括号和右括号时表示组合完毕
 *
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const result = [];

    backtrace('', n, n, result);
    return result;
}

/**
 *
 *
 * @param {string} combinations 当前括号组合
 * @param {number} leftParenthesisNum 剩余的左括号数
 * @param {number} rightParenthesisNum 剩余的右括号数
 * @param {string[]} result 所有的括号组合
 * @returns
 */
const backtrace = (combinations, leftParenthesisNum, rightParenthesisNum, result) => {
    if (Object.is(leftParenthesisNum, 0) && Object.is(rightParenthesisNum, 0)) {
        return result.push(combinations);
    }

    // 剩余左括号数大于 0 时，可以加入左括号
    if (leftParenthesisNum > 0) {
        backtrace(`${combinations}(`, leftParenthesisNum - 1, rightParenthesisNum, result);
    }

    // 剩余右括号多余左括号时，可以加入右括号
    if (rightParenthesisNum > 0 && rightParenthesisNum > leftParenthesisNum) {
        backtrace(`${combinations})`, leftParenthesisNum, rightParenthesisNum - 1, result);
    }
}