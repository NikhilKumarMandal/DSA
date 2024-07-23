


//Input: head = [1,3,4,7,1,2,6]
//Output: [1,3,4,1,2,6]
var deleteMiddle = function(head) {
  
    if (!head && !head.next) {
        return null
    }

    let value = head
    let currentValue = head
    let prev = null
    
    while (currentValue && currentValue.next) {
        currentValue = currentValue.next.next;
        prev = value
        value = value.next
    }

    prev.next = value.next;    
};




