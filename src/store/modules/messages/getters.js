import * as types from "./getter-types";

export default {
  [types.MESSAGES_BELONGS_TO_TEAMS](state) {
    return teamId => state.all.filter(message => message.teamId === teamId);
  }
};
