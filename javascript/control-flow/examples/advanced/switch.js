const role = "admin";

switch (role) {
  case "admin":
    console.log("Full Access");

    break;

  case "user":
    console.log("Limited Access");

    break;

  default:
    console.log("Guest");
}
