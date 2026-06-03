import { fetchUser } from "./api.js";

async function loadUser() {
  const user = await fetchUser();

  console.log(user);
}

loadUser();
