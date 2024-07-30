
// class Node {
//     constructor(data,address = null) {
//         this.data = data,
//         this.address = this.address
//     }
// }

// class LinkedList{
//     constructor() {
//         this.head = null
//     }
// }

// LinkedList.prototype.insertAtHead = function (data) {
//     const newNode = new Node(data)
//     this.head = newNode
// }

// LinkedList.prototype.insertAtEnd = function (data) {
//     const newNode = new Node(data)
//     if (!this.head) {
//         this.head = newNode
//     }
//     let last = this.head
//     while (last.address) {
//         last = last.address
//     }
//     last.address = newNode
// }

// LinkedList.prototype.printLinkedList = function () {
//     let arr = []
//     let value = this.head
//     while (value) {
//         arr.push(value.data)
//         value = value.address
//     }
//     console.log(arr.join('->'));
// }

// LinkedList.prototype.insertAtAnyGivenPoint = function (prevNode,data) {
//     if (!prevNode) {
//         console.log("Please Provide prevNode we can't work with null value");
//         return;
//     }
//     const newNode = new Node(data);
//     newNode.address = prevNode.address;
//     prevNode.address = newNode;
// }


// LinkedList.prototype.deleteFirstNode = function () {
//     if (!this.head) {
//         console.log('');
//         return
//     }
//     this.head = this.head.address
// }

// LinkedList.prototype.deleteLastNode = function () {
//     if (!this.head) {
//         return
//     }
    
//     if (!this.head.address) {
//         this.head = null
//     }

//     let secondLast = this.head
    
//     while (secondLast.address.address) {
//         secondLast = secondLast.address
//     }
//     secondLast.address = null
// }

// LinkedList.prototype.deleteParticularNode = function (key) {
//     if (!this.head) {
//         return
//     }

//     if (this.head.data === key) {
//         this.head = this.head.address
//     }

//     let current = this.head

//     while (current.address !== null) {
//         if (current.address.data === key) {
//             current.address = current.address.address
//             return
//         }

//         current = current.address
//     }
// }

// LinkedList.prototype.reverse = function () {
//     let curr = this.head;
//     let address = null;
//     let prev = null;

//     while (curr) {
//         address = curr.address;
//         curr.address = prev;
//         prev = curr;
//         curr = address
//     }
//     this.head = prev;
// }


// Example Usage
// const myLinkedList = new LinkedList();
// myLinkedList.insertAtHead(5);
// myLinkedList.insertAtEnd(6)
// myLinkedList.insertAtEnd(7)
// myLinkedList.insertAtEnd(8)

// let node = myLinkedList.head;
// while (node && node.data !== 5) {
//     node = node.address;
// }

// myLinkedList.insertAtAnyGivenPoint(node, 11)
// myLinkedList.deleteFirstNode()
// myLinkedList.deleteLastNode()
// myLinkedList.deleteParticularNode(7)
// ,myLinkedList.reverse()
// myLinkedList.printLinkedList()



// ---- LeetCode -----

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head;
    let next = null;
    let prev = null

    while (curr) {
        next = curr.next;
        curr.next = prev
        prev = curr;
        curr = next;
    }

    return prev 
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
   while (head !== null && head.val === val) {
        head = head.next;
    }

    let curr = head;
    while (curr !== null && curr.next !== null) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

    if (!head ||  left == right) {
        return head
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let leftPrev = dummy;
    let curr = head;

    for (let i = 0; i < left - 1; i++) {
    leftPrev = curr;
    curr = curr.next;
    }
    prev = null;
    next = null;
    for (let i = 0; i < right - left + 1; i++) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    leftPrev.next.next = curr;
    leftPrev.next = prev;

    return dummy.next
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let temp = head;
    while (temp !== null) {
        length++;
        temp = temp.next
    }
    console.log('Length Of LinkedList ', length);

     if (n === length) {
        return head.next;
    }
    
    let curr = head;
    let prev = null
    for (let i = 0; i < length - n; i++) {
        prev = curr;
        curr = curr.next
    }

    prev.next = curr.next;
    return head
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
    
    let length = 0;
    let temp = head;

while (temp !== null) {
    length++;
    temp = temp.next;
}

console.log('Length of LinkedList ', length);

for (let j = 0; j < nums.length; j++) {
    let value = nums[j];
    let curr = head;
    let prev = null;

    for (let i = 1; i <= length; i++) {
        if (curr === null) break;

        if (curr.val === value) {
            if (prev === null) {
                head = curr.next;
            } else {
                prev.next = curr.next;
            }
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
}

return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let numSet = new Set(nums);
    let dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while (curr.next !== null) {
        if (numSet.has(curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return dummy.next;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let mySet = new Set()
    let curr = head;

    while (curr !== null) {
        
        if (mySet.has(curr)) {
            return true
        }

        mySet.add(curr)
        curr = curr.next;
    }

    return false;
};



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    
    let mySet = new Set()
    let curr = head;

    while (curr !== null) {
        if (mySet.has(curr)) {
            return curr
        }

        mySet.add(curr)
        curr = curr.next;
    }

    return null
};



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums = [2,7,11,15], target = 9
// Output: [0,1]
    
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if (!head || !head.next) {
        return null;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next
    return head
};