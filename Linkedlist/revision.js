
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


// Example Usage
const myLinkedList = new LinkedList();
myLinkedList.insertAtHead(5);
myLinkedList.insertAtEnd(6)
myLinkedList.insertAtEnd(7)

let node = myLinkedList.head;
while (node && node.data !== 5) {
    node = node.address;
}

myLinkedList.insertAtAnyGivenPoint(node,11)
myLinkedList.printLinkedList()