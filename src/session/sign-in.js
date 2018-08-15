import api from "@/api"
import { setSession } from './common'

export const _signIn = (email, password) => {
  const params = {
    email: email,
    password: password
  };
  return api.signIn
    .createData(params)
    .then(response => setSession(response))
    .catch(error => reject(error));
};
