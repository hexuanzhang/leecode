/*
 * @Description: 查找字符串数组中的最长公共前缀
 * @Address: https://leetcode.com/problems/longest-common-prefix/ | https://leetcode-cn.com/problems/longest-common-prefix/
 * @Author: hexuan.zhang
 * @Date: 2019-10-18 23:08:26
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-18 23:46:13
 */

/**
* @param {string[]} strs
* @return {string}
*/
const longestCommonPrefix = (strs) => {
    if (strs.length < 2) return strs[0] || '';
    return findLongestCommonPrefix(strs, 0, strs.length - 1);
}

/**
 * 将找 strs 的 LCP 转化为先找 [0, mid] 的 LCP 和 [mid + 1, strs.length - 1] 的 LCP，最后再找两个 LCP 的 LCP
 * 用公式表示就是 LCP([0, strs.length - 1]) = LCP(LCP([0, mid]), LCP(mid + 1, strs.length -1))
 *
 * @param strs
 * @param startIndex
 * @param endIndex
 */
const findLongestCommonPrefix = (strs, startIndex, endIndex) => {
    if (Object.is(startIndex, endIndex)) {
        return strs[startIndex];
    } else {
        const midIndex = Math.trunc((startIndex + endIndex) / 2);
        return findCommonPrefix(findLongestCommonPrefix(strs, startIndex, midIndex), findLongestCommonPrefix(strs, midIndex + 1, endIndex));
    }
}

/**
 * 寻找两个字符串的 LCP
 *
 * @param strA
 * @param strB
 */
const findCommonPrefix = (strA, strB) => {
    const minLength = Math.min(strA.length, strB.length);

    for (let i = 0; i < minLength; i++) {
        if (!Object.is(strA[i], strB[i])) return strA.substring(0, i);
    }

    return strA.substring(0, minLength);
}