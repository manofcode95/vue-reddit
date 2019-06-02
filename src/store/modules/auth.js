import firebase, { db } from "@/firebase/fireinit";

export default {
  namespaced: true,
  state: {
    user: null,
    isLoggedIn: false
  },
  actions: {
    async login({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const data = await firebase
        .auth()
        .signInWithPopup(provider)
        .catch(err => {
          console.log(err.message);
        });
    },
    async logout({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  },
  mutations: {
    setUser(state, user) {
      state.isLoggedIn = user ? true : false;
      state.user = user;
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  }
};
