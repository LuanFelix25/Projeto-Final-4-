import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0,
      // todos and lastFetch removed per request
    }
  },
  getters: {
    doubled: (s) => s.count * 2,
    // todosCount removed
  },
  mutations: {
    increment(s, value = 1) { s.count += value },
    reset(s) { s.count = 0 },
    // todo-related mutations removed
  },
  actions: {
    // Actions can be added here if asynchronous store operations are needed.
  }
})
