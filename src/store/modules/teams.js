import Vue from "vue";
import api from "@/api";

const teams = {
  namespaced: true,
  state: {
    teams: []
  },
  getters: {
    ALL_TEAMS(state) {
      return Object.values(state.teams);
    },
    TEAM(state) {
      return id => state.teams[Number(id)];
    }
  },
  actions: {
    FETCH_TEAMS({ commit }) {
      const response = api.fetchTeams();
      commit("RECEIVE_TEAMS", response);
    },
    FETCH_TEAM({ commit }, teamId) {
      const response = api.fetchTeam(teamId);
      commit("RECEIVE_TEAM", response);
    }
  },
  mutations: {
    RECEIVE_TEAMS(state, teams) {
      teams.forEach(team => {
        if (team) {
          Vue.set(state.teams, team.id, team);
        }
      });
    },
    RECEIVE_TEAM(state, team) {
      if (team) {
        Vue.set(state.teams, team.id, team);
      }
    }
  }
};

export default teams;
