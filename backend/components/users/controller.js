import { listUsers } from "./store.js";

export const list = (id) => {
  const users = listUsers();
  if (id) {
    return users.find((item) => item.id === id);
  }
  return users;
};

export const removeUser = (id) => {};

export const addUser = (user) => {};
