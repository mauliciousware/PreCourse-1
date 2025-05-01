// Any problem you faced while coding this : Yes, Missed on few edge cases when dealing with POP 

class Node {
    constructor(d) {
        //constructor is called everytime the object of this class is created
        this.data = d // Will store the data
        this.next = null // will store pointing to another node
    }
}
class StackAsLinkedList {
    constructor(d) {
        this.head = null //initialy every linked list has null head
    }

    isEmpty(){
        // Time Complexity :  O (1) 
        // Space Complexity : O(1)

        //Check if there is no head 
        if(this.head){
            //This block will execute if head is present
            //that means linked list is not empty
            return false
        }
        else{
            // this block will run if there is no head that means LL is empty
            return true
        }

    }
    push(data) {
        // Time Complexity :  O (n) 
        // Space Complexity : O(1)

        //Write code to push data to the stack.
        //Condition 1 : if making head when LL is empty
        // Condition 2: if adding it to the last position
        if(!this.head){
            //no head present that means make new node turn it into head
            this.head = new Node(data,null)
        }
        else{
            let current = this.head
            while(current.next){
                //traverse the last element
                current = current.next
            }
            //This block will execute when the current node is last node and is pointing to null
            current.next = new Node(data,null)
        }
    }
    pop() {

        // Time Complexity :  O (n) 
        // Space Complexity : O(1)

        //If Stack Empty Return 0 and print "Stack Underflow"

        if (!this.head) {
            console.log("Stack Underflow")
            return 0
        }
        if(!this.head.next){
            //this means this operation is asking us to remove the only ele(head) from the LL
            let ele = this.head.data
            this.head = null
            return ele
        }
        //Write code to pop the topmost element of stack.
        //Traverse to the current.next.next == null
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        //this means we have reached the poistion where we are pointing the second last node
        let ele = current.next.data
        current.next = null
        return ele
        // the second last element should point to null resulting in deletion of element as we lose the pointer to last node
        //Also return the popped element
    }
    peek() {
        // Time Complexity :  O (n) 
        // Space Complexity : O(1)
        //Write code to just return the topmost element without removing it.
        //Travel to the last element and returns its data
        let current = this.head
        while (current.next) {
            current = current.next
        }
        //this means we are at the last ele
        return current.data
    }
}

//Driver code
const sll = new StackAsLinkedList();
sll.push(10);
sll.push(20);
sll.push(30);
console.log(sll.pop() + " popped from stack");
console.log("Top element is " + sll.peek());
