// ======================================
// ANONYMOUS CALLBACK
// ======================================

// Main function
function showMessage(callback) {
  callback();
}

// Anonymous callback
showMessage(function () {
  console.log("Anonymous callback executed");
});
