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
    status: "Processing", // create an order with an assigned orderID, amount, and status
    displayOrder: function(){ // create the method displayorder
        console.log(`OrderID:: ${this.orderID}, Amount: ${this.totalAmount}, Status: ${this.status}`);
    }}; // allows to log the order as one long string with all the details

order.displayOrder(); //console log of teh string of order details

// Task 3 - Array Manipulation

let cartItems = ["blaster", "space shoes", "alien repellent"]; // Declared an array as cartItems, and created three products to be in the cart
cartItems.push("helmet"); // adds "helemt" to the cart
cartItems.pop(); // removes the last item "helment" from the cart
cartItems.unshift("oxygen"); // adds item "oxygen" to the cart list at the start of the array
cartItems.shift(); // Removes the first item "oxygen"
console.log("cartItems: ", cartItems); // Log of the final array

// Task 4 - Map Method

let prices = [100, 200, 300]; // Make an array with three prices: 100, 200 and 300
let discountedPrices = prices.map(price => price *0.9); // Apply a 10% discount to each of teh product prices 
console.log("Discounted Prices", discountedPrices); // Log the discounted prices of each product

// Task 5 - Product Availability

let inventory = [20, 50, 25, 0, 10]; // Declare product inventories for five products
let inStock = inventory.filter(zeroStock => zeroStock > 0); // remove product inventory from the array that has zero stock
console.log("Inventory in Stock", inStock); // Log the in stock product amounts

// Task 6 - Revenue Calculation

let sales = [500, 300, 200, 400]; // Declare an array with sales amounts
let total = sales.reduce((sum, price) => sum + price, 0); // Adds the total of all the sales together
console.log("Total Sales: ", total); // Logs the total amount of sales

// Task 7 - Customer Search

let customers = ["Alice", "Bob", "Charlie", "David"]; // Declared an array of four customers
let Charlie = customers.find(customer => customer === "Charlie") // Use the find method to locate the customer named "Charlie"
   console.log("Located customer name: ", Charlie); // Log the found customer

// Task 8 - Tax Calculation

function calculateTax(amount, taxRate) {
    return amount * taxRate;
}; // create a function that calculates the tax based on the amount and taxrate
let calculatedTax = calculateTax(500, .10); // calculating tax for an amount of 500 using a 10% rate
console.log(`Tax calculation: ${calculatedTax}`) // Logging the amount of calculated tax

// Task 9 - Discount Application

function applyDiscount(price, discount) {
    return (price - (price * discount));
}; // create a function that subtracks a discount amount using the inputted price and discount percentage
let discountedprice = applyDiscount(500, .20); // calculate the discounted price of 20% off a $500 purchase
console.log("Discounted Price: $", discountedprice); // Log the discounted price

// Task 10 - Loyalty Points

const calculatePoints = (purchaseAmount) => purchaseAmount/10; // Arrow function to calculate loyalty points earned, 1 point for every $10
console.log("Loyalty Points Earned:", calculatePoints(100)); // Log the number of loyalty points earned