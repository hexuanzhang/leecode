/*
 * @Description: https://leetcode.com/problems/integer-to-roman/ | https://leetcode-cn.com/problems/integer-to-roman/submissions/
 * @Author: hexuan.zhang@pingxx.com
 * @Date: 2019-10-15 22:32:55
 * @Last Modified by: hexuan.zhang@pingxx.com
 * @Last Modified time: 2019-10-15 22:46:45
 */

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
    let result = '';

    // 处理千位
    let count = ~~(num / 1000);
    num -= (count * 1000);
    result = result + 'M'.repeat(count);

    // 处理百位
    count = ~~(num / 100);
    num -= (count * 100);
    switch (true) {
        case count === 9:
            result += 'CM';
            break;
        case count >= 5:
            result += ('D' + 'C'.repeat(count - 5));
            break;
        case count === 4:
            result += 'CD';
            break;
        default:
            result += 'C'.repeat(count);
    }

    // 处理十位
    count = ~~(num / 10);
    num -= (count * 10);
    switch (true) {
        case count === 9:
            result += 'XC';
            break;
        case count >= 5:
            result += ('L' + 'X'.repeat(count - 5));
            break;
        case count === 4:
            result += 'XL';
            break;
        default:
            result += 'X'.repeat(count);
    }

    // 处理个位
    switch (true) {
        case num === 9:
            result += 'IX';
            break;
        case num >= 5:
            result += ('V' + 'I'.repeat(num - 5));
            break;
        case num === 4:
            result += 'IV';
            break;
        default:
            result += 'I'.repeat(num);
    }

    return result;
}

/**
 * 精简版
 *
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
    const ROMAN_MAP = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,
    };

    let result = '';
    Object.keys(ROMAN_MAP).forEach(key => {
        const weight = ROMAN_MAP[key],
            count = Math.trunc(num / weight);

        result += key.repeat(count);
        num -= count * weight;
    });

    return result;
}