import { users } from "./users.js";

export function getUserById(id) {
  return users.find((user) => user.id === id);
}
