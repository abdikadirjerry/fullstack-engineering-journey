// ======================================
// CHALLENGE 2
// PAYMENT SYSTEM
// ======================================

// Payment promise
function processPayment() {
  return new Promise((resolve, reject) => {
    const paymentSuccess = true;

    setTimeout(() => {
      if (paymentSuccess) {
        resolve("Payment successful");
      } else {
        reject("Payment failed");
      }
    }, 4000);
  });
}

// Handle promise
processPayment()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
