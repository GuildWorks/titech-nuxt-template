import users from "./db/users";

export default {
  fetchUsers() {
    return new Promise(resolve => {
      resolve(users);
    });
  },
  fetchUser(userId) {
    const data = users.find(user => user.id === Number(userId));
    return new Promise(resolve => {
      resolve(data);
    });
  }
};
