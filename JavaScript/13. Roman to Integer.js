/*
 * @Description: 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 * @Address: https://leetcode.com/problems/roman-to-integer/ | https://leetcode-cn.com/problems/roman-to-integer/
 * @Author: hexuan.zhang
 * @Date: 2019-10-16 22:53:31
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-18 23:19:01
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const ROMAN_MAP = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    };

    let result = 0,
        prevWeight = 0;

    /**
     * 观察 CM、CD、XC、XL、IX、IV 可以发现，前者的值都比后者小，
     * 在遍历字符串的过程中，如果发现 s[i + 1] > s[i] ，那么则是加 s[i+1] - 2 * s[i] 的值；反之，则是加 s[i] 的值
     */
    for (let i = 0; i < s.length; i++) {
        const weight = ROMAN_MAP[s[i]];

        if (weight > prevWeight) {
            result += (weight - 2 * prevWeight);
        } else {
            result += weight;
        }

        prevWeight = weight;
    }

    return result;
}

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

    /**
     * 处理 CM、CD、XC、XL、IX、IV
     *
     * mathall() 有兼容性问题
     */
    Array.from(`${s}`.matchAll(RegExp('C[M|D]|X[L|C]|I[X|V]', 'g')), key => {
        result += ROMAN_MAP[key[0]];
        s = s.replace(key[0], '');
    });

    // 处理剩余情况
    s.split('').forEach(key => result += ROMAN_MAP[key]);

    return result;
}
