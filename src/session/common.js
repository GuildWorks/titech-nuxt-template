import defaultOptions from "@/storage/options.js";
import StorageFactory from "@/storage/storage.js";
import store from '@/store';
import { SET_ACCESS_TOKEN } from "@/store/modules/session/mutation-types";

const setObjectToken = (response) => {
  let now = new Date().getTime() / 1000;
  return {
    access_token: response.data.access_token,
    expire_at: response.data.expires_in + now
  }
};

export const setSession = (response) => {
  let token = setObjectToken(response);
  store.commit(`session/${SET_ACCESS_TOKEN}`, token);
  let options = Object.assign({}, defaultOptions);
  options.storageNamespace = process.env.VUE_APP_NAME + "-authenticate";
  const localStorage = StorageFactory(options);
  localStorage.setItem('token', JSON.stringify(token));
  return token;
};
