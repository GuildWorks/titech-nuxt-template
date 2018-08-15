import * as types from "./action-types";
import { _signIn } from "@/session/sign-in";

export default {
  [types.SIGN_IN](state, { email, password }) {
    return _signIn(email, password);
  }
};
