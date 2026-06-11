const user = {
  username: "Ahmed",

  role: "admin",

  loggedIn: true,
};

function checkAccess(user) {
  if (!user.loggedIn) {
    return "Please Login";
  }

  switch (user.role) {
    case "admin":
      return "Full Access";

    case "editor":
      return "Editor Access";

    case "user":
      return "User Access";

    default:
      return "Guest Access";
  }
}

console.log(checkAccess(user));
