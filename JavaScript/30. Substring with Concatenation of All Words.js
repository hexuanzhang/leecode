/*
 * @Description: 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置
 * @Address: https://leetcode.com/problems/substring-with-concatenation-of-all-words/ | https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 * @Author: hexuan.zhang
 * @Date: 2019-12-03 16:49:30
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-04 09:42:59
 */

/**
 * 思路：将题目简洁化就是，假设 words 数组中有 n 个单词，每个单词的长度均为 len，在 s 中找到所有长度为 n*len 的子串，使得其刚好是由 words 数组中的所有单词组成
 *  1. 统计 words 中每个单词出现的次数，放于 map 中
 *  2. 遍历字符串 s，每次截取长度为 n*len 的子串，判断子串中是否包含 words 中所有的单词
 *      2.1 遍历子串，截取长度为 len 的子串，判断统计 map 中是否包含该子串，如果包含则将该子串的统计次数减一，如果不包含则退出子串的遍历，进行字符串 s 的遍历
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
    let result = [];

    if (s.length <= 0 || words.length <= 0) return result;

    // 记录 words 中每个单词出现的次数
    const countMap = new Map();
    for (let word of words) {
        if (countMap.has(word)) {
            countMap.set(word, countMap.get(word) + 1);
        } else {
            countMap.set(word, 1);
        }
    }

    const oneWordLength = words[0].length, // 一个单词的长度
        allWordsLength = words.length * oneWordLength; // words 中所有单词的总长度

    // 字符串 s 的长度小于所有单词的总长度
    if (s.length < allWordsLength) return [];

    // 遍历字符串 s，判断每个子串是否满足条件
    for (let i = 0; i <= s.length - allWordsLength; i++) {
        const subString = s.substr(i, allWordsLength); // 截取长度为所有单词总长的子串

        const _countMap = new Map(countMap);
        for (let j = 0; j < allWordsLength; j += oneWordLength) {
            const str = subString.substr(j, oneWordLength); // 截取长度为一个单词长度的子串

            // 判断子串 str 是否在 map 中，即 words 中是否包含 str
            if (_countMap.has(str)) {
                _countMap.set(str, _countMap.get(str) - 1); // 对应的统计次数减一
                Object.is(_countMap.get(str), 0) && _countMap.delete(str); // word 次数为 0 时移除
            } else {
                break;
            }
        }

        // _countMap 统计的单词为 0 时，表示所有单词都匹配上了
        Object.is(_countMap.size, 0) && result.push(i);
    }

    return result;
};

console.log(findSubstring('barfoothefoobarman', ["foo", "bar"]));