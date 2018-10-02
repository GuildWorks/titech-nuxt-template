import users from "./db/users";

export default {
  fetchUsers() {
    return users;
  },
  fetchUser(userId) {
    return users.find(user => user.id === Number(userId));
  }
};
