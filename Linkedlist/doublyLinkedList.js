class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtStart(data) {
        const newNode = new Node(data, this.head, null);

        if (this.head !== null) {
            this.head.prev = newNode;
        }
        this.head = newNode;

        if (this.tail === null) {
            this.tail = newNode;
        }
    }

    insertAtEnd(data) {
        const newNode = new Node(data, null, this.tail);

        if (this.tail !== null) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (this.head === null) {
            this.head = newNode;
        }
    }

    insertAtAnyPlace(data, prevNode) {
        if (!this.head) {
            return;
        }

        const newNode = new Node(data, prevNode.next, prevNode);

        if (prevNode.next !== null) {
            prevNode.next.prev = newNode;
        }

        prevNode.next = newNode;

        if (prevNode.next === null) {
            this.tail = newNode;
        }
    }

    deleteFirst() {
        if (!this.head) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }

    deleteLast() {
        if (!this.tail) {
            return;
        }

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    reverse() {
        let current = this.head;
        let temp = null;
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        if (temp !== null) {
            this.tail = this.head;
            this.head = temp.prev;
        }
    }

    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" <-> "));
    }
}

// Example usage:
const myDoublyLinkedList = new DoublyLinkedList();

myDoublyLinkedList.insertAtStart(10);
myDoublyLinkedList.insertAtStart(20);
myDoublyLinkedList.insertAtStart(30);
myDoublyLinkedList.insertAtEnd(5);
myDoublyLinkedList.printList();  

let secondNode = myDoublyLinkedList.head.next;  
myDoublyLinkedList.insertAtAnyPlace(25, secondNode);
myDoublyLinkedList.printList();  

myDoublyLinkedList.deleteFirst();
myDoublyLinkedList.printList();  

myDoublyLinkedList.deleteLast();
myDoublyLinkedList.printList();  

myDoublyLinkedList.reverse();
myDoublyLinkedList.printList(); 



