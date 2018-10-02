import Vue from "vue";

const todos = {
  namespaced: true,
  state: {
    all: {}
  },
  actions: {
    CREATE_TODO({ commit }, todo) {
      commit("SET_TODO", todo);
    },
    REMOVE_TODO({ commit }, todoId) {
      commit("DELETE_TODO", todoId);
    },
    UPDATE_TODO({ commit }, todo) {
      commit("SET_TODO", todo);
    },
    REMOVE_COMPLETED({ commit }) {
      commit("DELETE_COMPLETED_TODO");
    },
    ALL_CHECKED({ commit }) {
      commit("ALL_TODO_COMPLETED");
    },
    ALL_UNCHECKED({ commit }) {
      commit("ALL_TODO_ACTIVE");
    }
  },
  getters: {
    ALL(state) {
      return Object.values(state.all);
    },
    ACTIVE(state) {
      return Object.values(state.all).filter(todo => {
        return !todo.completed;
      });
    },
    COMPLETED(state) {
      return Object.values(state.all).filter(todo => {
        return todo.completed;
      });
    }
  },
  mutations: {
    SET_TODO(state, todo) {
      if (todo) {
        Vue.set(state.all, Number(todo.id), todo);
      }
    },
    DELETE_TODO(state, todoId) {
      Vue.delete(state.all, Number(todoId));
    },
    DELETE_COMPLETED_TODO(state) {
      Object.keys(state.all).forEach(todoId => {
        if (state.all[todoId].completed) {
          Vue.delete(state.all, Number(todoId));
        }
      });
    },
    ALL_TODO_COMPLETED(state) {
      Object.keys(state.all).forEach(todoId => {
        state.all[todoId].completed = true;
      });
    },
    ALL_TODO_ACTIVE(state) {
      Object.keys(state.all).forEach(todoId => {
        state.all[todoId].completed = false;
      });
    }
  }
};

export default todos;
