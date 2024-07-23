class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addDataAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addDataInTheEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let last = this.head;
        while (last.next) {
            last = last.next;
        }

        last.next = newNode;
    }

    addDataAtAnyGivenPoint(prevNode, data) {
        if (!prevNode) {
            console.log("PrevNode is empty");
            return;
        }

        const newNode = new Node(data, prevNode.next);
        prevNode.next = newNode;
    }

    deleteHead() {
        if (!this.head) {
            console.log("Head is empty");
            return;
        }

        this.head = this.head.next;
    }

    deleteEnd() {
        if (!this.head) {
            console.log("Head is empty");
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let secondLast = this.head;
        while (secondLast.next.next) {
            secondLast = secondLast.next;
        }

        secondLast.next = null;
    }

    deleteAtAnyNode(key) {
        if (!this.head) {
            console.log("Head is empty");
            return false;
        }

        if (this.head.data === key) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === key) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }

        console.log("Node with key " + key + " not found.");
        return false;
    }

    printList() {
        let arr = [];
        let value = this.head;
        while (value) {
            arr.push(value.data);
            value = value.next;
        }

        console.log(arr.join(" -> "));
    }

    search(key) {
        let current = this.head;
        while (current) {
            if (current.data === key) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    reverse() {
        let current = this.head;
        let next = null;
        let prev = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    // deleteMiddleNode() {
    //     if (!this.head) {
    //         return 
    //     }

    //     if (this.head.next === null) {
    //         return this.head = null
    //     }

    //     for (let i = 0; i < array.length; i++) {
    //         const element = array[i];
            
    //     }
    // }
}

// Example usage
const myLinkedList = new LinkedList();
myLinkedList.addDataAtHead(4);
myLinkedList.addDataAtHead(5);
myLinkedList.addDataAtHead(6);
myLinkedList.addDataAtHead(7);
myLinkedList.addDataAtHead(8);

myLinkedList.deleteEnd();
myLinkedList.printList();  


let node = myLinkedList.head.next; 
myLinkedList.addDataAtAnyGivenPoint(node, 10);
myLinkedList.printList();  


