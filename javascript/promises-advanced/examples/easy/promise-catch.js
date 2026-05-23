// ======================================
// PROMISE WITH CATCH
// ======================================

const promise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Success");
  } else {
    reject("Something went wrong");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
