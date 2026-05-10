/* Expected HTML:
  <p id="status-message">Loading...</p>
*/

// ❓ Change element text using innerText
const statusMessage = document.getElementById("status-message");

// Update the text
statusMessage.innerText = "Data loaded successfully!";
