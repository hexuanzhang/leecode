/*
 * @Description: 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1
 * @Address: https://leetcode.com/problems/implement-strstr/ | https://leetcode-cn.com/problems/implement-strstr/
 * @Author: hexuan.zhang
 * @Date: 2019-12-03 10:34:01
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-03 10:57:00
 */

/**
 * 思路：字符匹配算法有很多种
 *  1. String 自带的 indexOf 方法
 *  2. KMP 算法
 *  3. BM 算法
 *  4. Horspool 算法
 *  5. Sunday 算法
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
    return haystack.indexOf(needle);
};