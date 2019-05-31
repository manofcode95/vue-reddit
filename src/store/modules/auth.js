import firebase, { db } from '@/firebase/fireinit';

export default {
  namespaced: true,
  state: {},
  actions: {
    async login({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      const data = await firebase.auth().signInWithPopup(provider);
      const user = {
        name: data.user.displayName,
        email: data.user.email,
        img: data.user.photoURL,
        uid: data.user.uid,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
      };

      db.collection('users').doc(user.uid).set({ user }).then((res) => {
        console.log(res);
      });
      commit('setUser', user);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
};
