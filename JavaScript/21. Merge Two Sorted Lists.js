/*
 * @Description: 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @Address: https://leetcode.com/problems/merge-two-sorted-lists/ | https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @Author: hexuan.zhang
 * @Date: 2019-11-27 18:07:45
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-27 18:43:23
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * 思路：采用递归的方式实现
 *  1. 如果 l1.val < l2.val，那么可以将问题转换为将 l1.next 与 l2 合并；反之，
 *      如果 l2.val < l1.val，那么将问题转换为 12.next 与 l1 合并
 *  2. 递归的结束条件是 l1 或 l2 为空
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let dummyNode = new ListNode('');

    const EMPTY = [null, undefined];
    if (EMPTY.includes(l1)) return l2;
    if (EMPTY.includes(l2)) return l1;

    if (l1.val < l2.val) {
        dummyNode.val = l1.val;
        dummyNode.next = mergeTwoLists(l1.next, l2);
    } else {
        dummyNode.val = l2.val;
        dummyNode.next = mergeTwoLists(l1, l2.next);
    }

    return dummyNode;
}