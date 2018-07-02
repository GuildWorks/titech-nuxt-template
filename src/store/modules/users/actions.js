import * as types from "./mutation-types"
import api from "@/api"

export default {
  [types.FETCH_USERS]({ commit }) {
    api.users.getData().then((response) => {
      commit(types.FETCH_USERS, response.data)
    }).catch(error => {
      console.log(error)
    })
  }
}
