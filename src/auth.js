import firebase, { db } from '@/firebase/fireinit';
import store from '@/store/index';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const setUser = {
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      uid: user.uid,
      create_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    db.collection('users')
      .doc(user.uid)
      .set(setUser)
      .then(() => store.commit('auth/setUser', setUser))
      .then(() => {
        router.push({ name: 'subreddits' });
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else {
    store.commit('auth/setUser', null);
    // router.push("/auth");
  }
});
