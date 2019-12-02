/*
 * @Description: 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表
 * @Address: https://leetcode.com/problems/reverse-nodes-in-k-group/ | https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * @Author: hexuan.zhang
 * @Date: 2019-12-02 10:31:35
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-02 11:36:06
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * 思路：对原链进行遍历翻转，翻转过程采用双指针进行翻转，需要注意下面几点：
 *  1. 节点长度小于 k 或剩余为翻转的节点长度小于 k 时不进行翻转
 *  2. 翻转链时要考虑节点相邻的情况
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
    // 只有一个节点，则直接返回该节点
    if ((!head) || Object.is(head.next, null)) return head;

    const nodes = [];
    while (!Object.is(head, null)) {
        nodes.push(head);
        head = head.next;
    }

    const nodeNums = nodes.length;

    if (nodeNums < k) return nodes[0]; // 链长度小于 k 时不进行交换，直接返回原链

    for (let i = 0; i < nodeNums; i += k) {
        // 剩余未翻转节点数小于 k 时，不进行翻转
        if (nodeNums - i < k) break;

        reverseGroup(i, k, nodes);
    }

    return nodes[0];
};

/**
 * 将处于链表 head 中 [startIndex, startIndex + nums - 1] 间的节点逆转
 *
 * @param {number} startIndex 起始位置
 * @param {number} nums 翻转节点的数量
 * @param {ListNode} head 节点链表
 */
const reverseGroup = (startIndex, nums, nodes) => {
    let leftIndex = startIndex,
        rightIndex = startIndex + nums - 1;

    while (leftIndex < rightIndex) {
        let startNodeParent = nodes[leftIndex - 1] || null,
            startNode = nodes[leftIndex];

        let endNode = nodes[rightIndex] || null;

        //  startNode 与 endNode 是相邻节点
        if (Object.is(startNode.next, endNode)) {
            // 更新 startNodeParent 节点的 next
            startNodeParent && (startNodeParent.next = endNode);

            // 更新交换节点自身的 next
            startNode.next = endNode.next;
            endNode.next = startNode;
        } else {
            const endNodeParent = nodes[rightIndex - 1];

            // 更新父节点的 next
            startNodeParent && (startNodeParent.next = endNode);
            endNodeParent.next = startNode;

            // 更新交换节点自身的 next
            [startNode.next, endNode.next] = [endNode.next, startNode.next];
        }

        // 交换节点位置
        [nodes[leftIndex], nodes[rightIndex]] = [nodes[rightIndex], nodes[leftIndex]];

        leftIndex++;
        rightIndex--;
    }
}

