// CHALLENGE 1 (Easy)
// Create a function that remembers a greeting message

function greeting(msg) {
  return function (name) {
    console.log(msg + " " + name);
  };
}

// CHALLENGE 2 (Intermediate)
// Create a password checker using closure

function auth(password) {
  return function (input) {
    if (input === password) {
      console.log("Access granted");
    } else {
      console.log("Access denied");
    }
  };
}

// CHALLENGE 3 (Advanced)
// Create a function that limits how many times another function can run

function limitRuns(limit) {
  let count = 0;

  return function () {
    if (count < limit) {
      count++;
      console.log("Function executed:", count);
    } else {
      console.log("Limit reached");
    }
  };
}
