import users from "./db/users";
import teams from "./db/teams";

export default {
  fetchUsers() {
    return users;
  },
  fetchUser(userId) {
    return users.find(user => user.id === Number(userId));
  },
  fetchTeams() {
    return teams;
  },
  fetchTeam(teamId) {
    return teams.find(team => team.id === Number(teamId));
  }
};
