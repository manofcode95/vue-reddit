import { db } from "@/firebase/fireinit";

export default {
  namespaced: true,
  state: {
    subreddits: []
  },
  mutations: {
    setSubs(state, payload) {
      state.subreddits = payload;
    }
  },
  actions: {
    async init({ commit }) {
      console.log("[Actions]-fetchSubs");
      const listSubs = await db
        .collection("subreddits")
        .get()
        .then(data => {
          let subs = [];
          data.forEach(el => {
            subs.push(el.data());
          });
          return subs;
        })
        .catch(err => {
          console.log(err.message);
        });
      commit("setSubs", listSubs);
    }
  },
  getters: {
    getSubs(state) {
      console.log("[Getters]-getSubs");
      if (state.subreddits) {
        return state.subreddits;
      }
      return [];
    }
  }
};
