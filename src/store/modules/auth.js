import firebase, { db } from '@/firebase/fireinit';

export default {
  namespaced: true,
  state: {
    user: null,
    isLoggedIn: false,
  },
  actions: {
    async login({ }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const data = await firebase
        .auth()
        .signInWithPopup(provider)
        .catch((err) => {
          console.log(err.message);
        });
    },
    async logout({ }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mutations: {
    setUser(state, user) {
      state.isLoggedIn = !!user;
      state.user = user;
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
};
