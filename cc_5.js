// Task 1 - Customer Profile

let customer = {
    name: "Buzz Lightyear",
    age: 24,
    email: "toinfinity&beyond@hotmail.com"
}; // create customer with properties name age and email
console.log("Customer Information: ", customer); // log customer information

// Task 2 - Object Methods

let order = {
    orderID: 101,
    totalAmount: 200,
    status: "Processing", // create an order with an assigned orderID, amount and status
    displayOrder: function(){ // create the method displayorder
        console.log(`OrderID:: ${this.orderID}, Amount: ${this.totalAmount}, Status: ${this.status}`);
    }}; // allows to log the order as one long string with all the details

order.displayOrder(); //console log of teh string of order details

// Task 3 - Array Manipulation

let cartItems = ["blaster", "space shoes", "alien repellent"]; // Declared an array as cartItems and created three products to be in the cart
cartItems.push("helmet"); // adds "helemt" to the cart
cartItems.pop(); // removes the last item "helment" from the cart
cartItems.unshift("oxygen"); // adds item "oxygen" to the cart list at the start of the array
cartItems.shift(); // Removes the first item "oxygen"
console.log("cartItems: ", cartItems); // Log of the final array
