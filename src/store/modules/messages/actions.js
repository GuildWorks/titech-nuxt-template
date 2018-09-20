import * as types from "./action-types";
import * as mutationTypes from "./mutation-types";
import Firebase from "@/api/firebase";

export default {
  [types.FETCH_MESSAGES]({ commit }, teamId) {
    Firebase.fetchMessages(teamId, messages =>
      commit(mutationTypes.RECEIVE_MESSAGES, messages)
    );
  },
  [types.CREATE_MESSAGE](state, { userId, teamId, content }) {
    Firebase.createMessage(userId, teamId, content);
  },
  [types.DELETE_MESSAGE](state, messageId) {
    Firebase.deleteMessage(messageId);
  }
};
