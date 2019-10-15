/*
 * @Description: 给定一个字符串 string 和一个包含 '.' 和 '*' 的字符规则 pattern，实现一个判断 s 和 p 是否匹配函数
 * @Address: https://leetcode.com/problems/regular-expression-matching/ | https://leetcode-cn.com/problems/regular-expression-matching/
 * @Author: hexuan.zhang
 * @Date: 2019-10-14 14:30:25
 * @Last Modified by: hexuan.zhang@pingxx.com
 * @Last Modified time: 2019-10-15 23:01:19
 */

/**
 *  思路：借用 DP 思想来解决问题
 *      用 dp[i][j] 表示 string 前 i 个字符是否能被 patern 的前 j 个字符匹配；从已求出的 dp[i-1][j-1] 再配合 s[i]、p[j] 去求 dp[i][j]
 *
 *      1. 最简单的情况，p[j] = s[i]，那么 dp[i][j] = dp[i-1][j-1]
 *      2. p[j] === '.' 时，'.' 匹配任意字符，那么 dp[i][j] = dp[i-1][j-1]
 *      3. p[j] === '*' 时，这个时候的情况更复杂了，'*' 匹配零个或多个前面的那一个元素，那么需要考虑它前面的元素 p[j-1]，如：'aa'-'a*'、
 *          3.1 p[j-1] !== s[i] 时，需要先考虑 p[j-1] 是不是 '.'
 *              3.1.1 如果 p[j-1] !== '.'，可以考虑把 p[j-1]* 当做空（即 p[j-1]p[j] -> empty），那么 dp[i][j] = dp[i][j-2]
 *              3.1.2 如果 p[j-1] === '.' 时，由于 '.' 可以匹配任意字符，那么 p[j-1]* 相当于 s[j-1]*，匹配过程和 3.2 一样，如：'aa'-'.*'
 *          3.2 p[j-1] === s[i] 时，需要判断 '*' 匹配多少个 p[j-1]
 *              3.2.1 如果 p[j-1]* 匹配 0 个 p[j-1]，即 p[j-1]* -> empty，那么 dp[i][j] = dp[i][j-2]，如：'aaa'-'aaab*'
 *              3.2.2 如果 p[j-1]* 只匹配一个 p[j-1]，那么 dp[i][j] = dp[i][j-1]，如：'aa'-'a*'
 *              3.2.3 如果 p[j-1]* 匹配多个 p[j-1]，那么 dp[i][j] = dp[i-1][j]，如：'aaa'-'a*'
 *
 * @param {string} string(s)
 * @param {string} pattern(p)
 * @return {boolean}
 */
const isMatch = (s, p) => {
    let dp = Array.from({ length: s.length + 1 }, () => Array.from({ length: p.length + 1 }, () => false));
    dp[0][0] = true;

    // 处理 pattern 以 '字母 + *' 开头的情况如 'aaa'-‘b*aa'，将 '字母 + *' 视为 empty
    for (let i = 0; i < p.length; i++) {
        if (Object.is(p[i], '*') && dp[0][i - 1]) dp[0][i + 1] = true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (Object.is(p[j], s[i])) { // 1
                dp[i + 1][j + 1] = dp[i][j];
            } else if (Object.is(p[j], '.')) { // 2
                dp[i + 1][j + 1] = dp[i][j];
            } else if (Object.is(p[j], '*')) {
                if (p[j - 1] !== s[i] && p[j - 1] !== '.') { // 3.1
                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                } else { // 3.2
                    dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j] || dp[i + 1][j - 1];
                }
            }
        }
    }

    return dp[s.length][p.length];
};

console.log(isMatch('aaa', 'bb'));