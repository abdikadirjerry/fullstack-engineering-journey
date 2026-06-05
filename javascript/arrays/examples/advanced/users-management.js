const users = [
  {
    id: 1,
    name: "Ahmed",
  },

  {
    id: 2,
    name: "Ali",
  },

  {
    id: 3,
    name: "Jerry",
  },
];

const foundUser = users.find((user) => user.id === 2);

console.log(foundUser);
