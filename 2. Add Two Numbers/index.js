/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, res = [0]) {
    if (l1 === null && l2 === null) {
        return res[res.length - 1] === 0
            ? res.slice(0, res.length - 1)
            : res
    }

    let l1Val, l2Val, l1Next, l2Next;

    if (l1 === null) {
        l1Val = 0
        l1Next = null
    } else {
        l1Val = l1.val
        l1Next = l1.next
    }
    if (l2 === null) {
        l2Val = 0
        l2Next = null
    } else {
        l2Val = l2.val
        l2Next = l2.next
    }

    const curRes = l1Val + l2Val + res[res.length - 1]
    res.splice(
        res.length - 1,
        res.length,
        ...(String(curRes >= 10 ? curRes : `0${curRes}`)
            .split('')
            .reverse()
            .map(i => Number(i))
        )
    )

    return addTwoNumbers(
        l1Next,
        l2Next,
        res
    )
};