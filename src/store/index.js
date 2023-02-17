import { createStore } from "vuex";

export default createStore({
  state: {
    error: "",
    loading: false,
  },
  getters: {},
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {},
  modules: {},
});
