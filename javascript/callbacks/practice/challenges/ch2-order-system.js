// ======================================
// CHALLENGE 2
// ORDER SYSTEM CALLBACK
// ======================================

// Order function
function placeOrder(callback) {
  console.log("Placing order...");

  setTimeout(() => {
    callback();
  }, 3000);
}

// Order completed callback
function orderCompleted() {
  console.log("Order completed successfully");
}

// Execute order
placeOrder(orderCompleted);
