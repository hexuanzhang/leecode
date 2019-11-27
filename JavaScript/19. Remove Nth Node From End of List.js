/*
 * @Description: 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
 * @Address: https://leetcode.com/problems/remove-nth-node-from-end-of-list/ | https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @Author: hexuan.zhang
 * @Date: 2019-11-02 21:47:39
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: yyyy-11-dd 18:29:00
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路：删除倒数第 n 个节点需要将倒数第 n+1 个节点的 next 指向倒数第 n-1 个节点
 *  1. 获取节点数量
 *  2. 遍历节点，将指针指向倒数第 n+1 个节点
 *  3. 删除倒数第 n 个节点
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    const dummyNode = new ListNode('');
    dummyNode.next = head;

    // 统计节点数量
    let count = 0,
        firstNode = dummyNode.next;
    while (!Object.is(firstNode, null)) {
        count++;
        firstNode = firstNode.next;
    }

    count -= n;
    firstNode = dummyNode;
    while (count > 0) { // 遍历节点，让 fisrtNode 指向倒数第 n+1 个节点
        firstNode = firstNode.next;
        count--;
    }
    // 删除倒数第 n 个节点
    firstNode.next = firstNode.next.next;

    return dummyNode.next;
};

/**
 * 思路：采用双指针的方式，两指针间隔 n-1 个节点，然后同时移动指针，当结束指针到达链表的尾部时，说明开始指针位于倒数第 n+1 个节点位置
 *
 */
const removeNthFromEnd = (head, n) => {
    let dummyNode = new ListNode('');
    dummyNode.next = head;

    let startNode = dummyNode,
        endNode = dummyNode;

    // 移动 endNode，使 startNode 与 endNode 间相差 n-1 个节点
    while (n > 0) {
        endNode = endNode.next;
        n--;
    }

    // 同时移动两个节点，直至 endNode 位于最后一个节点位置
    while (endNode.next !== null) {
        startNode = startNode.next;
        endNode = endNode.next;
    }

    // 删除倒数第 n 个节点
    startNode.next = startNode.next.next;

    return dummyNode.next;
}

