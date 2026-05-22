// ======================================
// ORDER SYSTEM PROMISE
// ======================================

// Create promise
function placeOrder() {
  return new Promise((resolve, reject) => {
    const orderSuccess = true;

    setTimeout(() => {
      if (orderSuccess) {
        resolve("Order completed");
      } else {
        reject("Order failed");
      }
    }, 3000);
  });
}

// Handle promise
placeOrder()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
