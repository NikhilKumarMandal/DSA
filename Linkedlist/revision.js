class Node{
    constructor(data,next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}


LinkedList.prototype.insertAtStart = function (data) {
    const newNode = new Node(data)
    this.head = newNode
}

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data)

    if (!this.head) {
        this.head = newNode
        return
    }

    let value = this.head
    while (value.next) {
        value = value.next
    }
    value.next = newNode
}

LinkedList.prototype.insertAtAnyGivenPoint = function (prevNode, data) {
    if (!prevNode) {
        return
    }
    const newNode = new Node(prevNode.next, data)
    if (!this.head) {
        return
    }

    prevNode.next = newNode
}

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return
    }
    
    if (this.head.next === null) {
        this.head = null
        return
    }

    this.head = this.head.next    
}

LinkedList.prototype.deleteFromEnd = function () {
    
}