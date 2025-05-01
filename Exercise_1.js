// Did this code successfully run on Leetcode : Couldnt find the problem on leetcode

// Any problem you faced while coding this : Yes, Usually I prefer using dynamic array to implement stack , here a fixed size array had me think before poping the element 
//Because top my head i just used this.a.pop() <- but this will delete the 1000th element 
// I should be removing eveything wrt to the top in fixed size array,  this was unsual but had FUN!

class Stack {
    constructor() {
        //Initialize your constructor
        //constructor is called everytime the object of this class is created
        this.MAX = 1000; //Max size the array can have
        this.top = -1; // Top points to the TOP element inside the stack
        this.a = new Array(this.MAX); // size of the array
        
    }
    isEmpty(){
        // Time Complexity :  O (1) 
        // Space Complexity : O(1)

        //So this function checks if the array is empty 
        //would normally return the this.array.length === 0 if yes -> True or else False
        // But this is a static array with fixed size, so had to use top 
        return this.top === -1
    }
    push(x){
        // Time Complexity :  O (1) 
        // Space Complexity : O(1)

        //Check for stack Overflow
        if(this.top>1000){
            //This block will run if the top is pointing to the position greater than our max
            //so that means its an overflow
            console.log("Stack OverFlow, Cannot push")
        }
        // incrementing top because top is initialised to -1 and not 0
        // if it was 0 then we INSERT FIRST and then increment TOP
        // But as top is -1(and as it should be) we first increment top and then write the insert logic
        this.top += 1
        //This code will run when stack has avaiable space
        this.a[this.top] = x

    }
    pop(){
        // Time Complexity :  O (1) 
        // Space Complexity : O(1)

        //If empty return 0 and print " Stack Underflow"
        //Use TOP again to verifiy if stack is empty
        // Also stacks property LIFO -> so top always point to the last element (and that is one that has to be removed so we use top)
        if(this.top < 0){
            //this block will execute when top is less than zero that means 0th element is not present
            // which ensues that stack is empty
            console.log("Stack is empty")
        }
        //Write your code here
        let ele =  this.a[this.top] // Perform POP
        this.a[this.top] = undefined // make it empty
        this.top -= 1 //decrement top
        return ele
       // Return because driver code needs ele

    }
    peek(){
        // Time Complexity :  O (1) 
        // Space Complexity : O(1)

        if(this.isEmpty){
            console.log("Stack is empty")
        }
       // This function should just return the TOP element of the stack
       return this.a[this.top]
    }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.pop() + " Popped from stack");
