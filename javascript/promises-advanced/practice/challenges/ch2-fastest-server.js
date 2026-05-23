// ======================================
// CHALLENGE 2
// FASTEST SERVER
// ======================================

const server1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Server 1");
  }, 3000);
});

const server2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Server 2");
  }, 1000);
});

Promise.race([server1, server2]).then((result) => {
  console.log(`${result} responded first`);
});
