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

LinkedList.prototype.addDataAtHead = function (data) {
    const newNode = new Node(data)
    this.head = newNode
}

LinkedList.prototype.addDataInTheEnd = function (data) {
    const newNode = new Node(data)
    if (!this.head) {
    this.head = newNode
    } 
    
    let last = this.head;
    if (last.next) {
        last = last.next   
    }

    last.next =  newNode

}

LinkedList.prototype.addDataAtAnyGivenPoint = function (prevNode, data) {
    
    if (!prevNode) {
        console.log("PrevNode is empty");
        return
    }

    const newNode = new Node(data, prevNode.next)
    
    prevNode.next = newNode
    
}

LinkedList.prototype.Deletehead = function () {
    if (!this.head) {
        console.log("Head is empty");
        return;
    }
    if (!this.head.next) {
        this.head = null
        return
    }

    this.head = this.head.next;
}

LinkedList.prototype.DeleteEnd = function () {
    if (!this.head) {
        console.log("Head is empty");
        return;
    }
    if (!this.head.next) {
        this.head = null
        return
    }
    secondLast = this.head 

    while (secondLast.next.next) {
        secondLast = secondLast.next
    }

    secondLast.next = null
}

LinkedList.prototype.DeleteAtAnyNode = function (key) {
    // If the list is empty, return false
    if (!this.head) {
        console.log("Head is empty");
        return false;
    }

    // If the node to delete is the head, update the head and return true
    if (this.head.data === key) {
        this.head = this.head.next;
        return true;
    }

    let current = this.head;
    while (current.next !== null) {
        // If the next node is the one to be deleted, update the next pointer and return true
        if (current.next.data === key) {
            current.next = current.next.next;
            return true;
        }
        current = current.next;
    }

    // If the key was not found, return false
    console.log("Node with key " + key + " not found.");
    return false;
};

LinkedList.prototype.printList = function () {

    let arr = []
    let value = this.head;
    while (value) {
        arr.push(value.data)
        value = value.next
    }

    console.log(arr.join(" -> "));
}

LinkedList.prototype.search = function (key) {
    
    let current = this.head
    while (current) {
        if (current.data === key) {
            return true
        }
    }

    return false
}



