import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(sessionStorage.getItem("userInfo") ?? "{}"),
    token: JSON.parse(sessionStorage.getItem("userToken") ?? "{}"),
    locale: JSON.parse(sessionStorage.getItem("locale") ?? "{}"),
    account: JSON.parse(sessionStorage.getItem("account") ?? "{}"),
  },
  getters: {},
  mutations: {
    setUserInfo(state, user) {
      state.userInfo = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setLocale(state, locale) {
      state.locale = locale;
    },
    setAccount(state, account) {
      state.account = account;
    },
  },
  actions: {
    SET_USER_INFO({ commit }, data) {
      if (data.user) {
        commit("setUserInfo", data.user || {});
        sessionStorage.setItem("userInfo", JSON.stringify(data.user));
      }
      if (data.token) {
        commit("setToken", data.token);
        sessionStorage.setItem("userToken", JSON.stringify(data.token));
      }
    },
    DELETE_USER_INFO({ commit }) {
      commit("setUserInfo", null);
      commit("setToken", null);
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("userToken");
    },
    SET_LOCALE({ commit }, locale) {
      commit("setLocale", locale);
      sessionStorage.setItem("locale", JSON.stringify(locale));
    },
    SET_ACCOUNT({ commit }, account) {
      commit("setAccount", account);
      sessionStorage.setItem("account", JSON.stringify(account));
    },
  },
  modules: {},
});
