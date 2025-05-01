//Any problem you faced while coding this : Had to change the initial boilerplate code to set to current stadndards of writing DSA implentation.
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

    insert(data) {
        // Time Complexity :  O (n) 
        // Space Complexity : O(1)
        //condition 1: list is empty make the new data the new head
        //If we dont have head then create a new node and make it head
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        //condition 2: we already have a head just append to the last position
        //This block will execute for 2nd condi
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(data);
    }

    printList() {
        // Time Complexity :  O (n) 
        // Space Complexity : O(1)
        //Use current as temp node to travel the linkedList
        let current = this.head;
        let elements = [];
        //untill we find the null keep pushing it to the array
        //move current pointer to the next node
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements);

    }
}
       // Driver code
       /* Start with the empty list. */
       let list = new LinkedList();
        // ******INSERTION******
        // Insert the values
        list.insert(list, 1);
        list.insert(list, 2);
        list.insert(list, 3);
        list.insert(list, 4);
        // Print the LinkedList
        list.printList(list);
