
class Node {
    constructor(data,address = null) {
        this.data = data,
        this.address = this.address
    }
}

class LinkedList{
    constructor() {
        this.head = null
    }
}

LinkedList.prototype.insertAtHead = function (data) {
    const newNode = new Node(data)
    this.head = newNode
}

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data)
    if (!this.head) {
        this.head = newNode
    }
    let last = this.head
    while (last.address) {
        last = last.address
    }
    last.address = newNode
}

LinkedList.prototype.printLinkedList = function () {
    let arr = []
    let value = this.head
    while (value) {
        arr.push(value.data)
        value = value.address
    }
    console.log(arr.join('->'));
}

LinkedList.prototype.insertAtAnyGivenPoint = function (prevNode,data) {
    if (!prevNode) {
        console.log("Please Provide prevNode we can't work with null value");
        return;
    }
    const newNode = new Node(data);
    newNode.address = prevNode.address;
    prevNode.address = newNode;
}


LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        console.log('');
        return
    }
    this.head = this.head.address
}

LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return
    }
    
    if (!this.head.address) {
        this.head = null
    }

    let secondLast = this.head
    
    while (secondLast.address.address) {
        secondLast = secondLast.address
    }
    secondLast.address = null
}

LinkedList.prototype.deleteParticularNode = function (key) {
    if (!this.head) {
        return
    }

    if (this.head.data === key) {
        this.head = this.head.address
    }

    let current = this.head

    while (current.address !== null) {
        if (current.address.data === key) {
            current.address = current.address.address
            return
        }

        current = current.address
    }
}

LinkedList.prototype.reverse = function () {
    let curr = this.head;
    let address = null;
    let prev = null;

    while (curr) {
        address = curr.address;
        curr.address = prev;
        prev = curr;
        curr = address
    }
    this.head = prev;
}

// Example Usage
const myLinkedList = new LinkedList();
myLinkedList.insertAtHead(5);
myLinkedList.insertAtEnd(6)
myLinkedList.insertAtEnd(7)
myLinkedList.insertAtEnd(8)

let node = myLinkedList.head;
while (node && node.data !== 5) {
    node = node.address;
}

myLinkedList.insertAtAnyGivenPoint(node, 11)
// myLinkedList.deleteFirstNode()
// myLinkedList.deleteLastNode()
// myLinkedList.deleteParticularNode(7)
,myLinkedList.reverse()
myLinkedList.printLinkedList()


