/*
 * @Description: 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * @Address: https://leetcode.com/problems/roman-to-integer/ | https://leetcode-cn.com/problems/roman-to-integer/
 * @Author: hexuan.zhang
 * @Date: 2019-10-16 22:53:31
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-16 23:48:29
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
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

    let result = 0;

    let index = 0;
    while (index < s.length) {
        let chart = s[index];

        switch (chart) {
            case 'C':
                if (['M', 'D'].includes(s[index + 1])) { // 'CM'、'CD'
                    result += ROMAN_MAP[`C${s[index + 1]}`];
                    index += 2;
                } else { // 'C'
                    result += ROMAN_MAP[chart];
                    ++index;
                }
                break;
            case 'X':
                if (['L', 'C'].includes(s[index + 1])) { // 'XL'、'XC'
                    result += ROMAN_MAP[`X${s[index + 1]}`];
                    index += 2;
                } else { // 'X'
                    result += ROMAN_MAP[chart];
                    ++index;
                }
                break;
            case 'I':
                if (['X', 'V'].includes(s[index + 1])) { // 'IX'、'IV'
                    result += ROMAN_MAP[`I${s[index + 1]}`];
                    index += 2;
                } else { // 'I'
                    result += ROMAN_MAP[chart];
                    ++index;
                }
                break;
            default:
                result += ROMAN_MAP[chart];
                ++index;

        }
    }

    return result;
}
