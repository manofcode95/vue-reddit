import firebase, { db } from '@/firebase/fireinit';

export default {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    addPost(state, payload) {
      const sub = state.posts.find(el => el.sub == payload.sub_id);
      console.log(sub);
      if (sub) {
        sub.articles.push(payload);
      }
      state.posts.push({ sub: payload.sub_id, articles: payload });
    },
    setPosts(state, payload) {
      console.log('[Mutation]-setPosts');
      const { subId } = payload;
      state.posts.push({ sub: subId, articles: payload.posts });
    },
  },
  actions: {
    async submitPost({ commit }, payload) {
      console.log('[Actions]-submitPost');
      const setPost = {
        ...payload,
        user_id: firebase.auth().currentUser.uid,
        create_at: firebase.firestore.FieldValue.serverTimestamp(),
      };
      db.collection('posts').add(setPost).then((res) => {
        db.collection('posts').doc(res.id).update({ post_id: res.id });
      })
        .then(() => {
          commit('addPost', setPost);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    async initPosts({ commit }, payload) {
      console.log('[Actions]-initPosts');
      const posts = await db.collection('posts').where('sub_id', '==', payload);
      posts.get()
        .then((data) => {
          const listPosts = [];
          data.forEach((el) => {
            listPosts.push(el.data());
          });
          return listPosts;
        })
        .then((listPosts) => {
          commit('setPosts', { posts: listPosts, subId: payload });
        })
        .catch(err => console.log(err.message));
    },
  },
  getters: {

    getArticles(state) {
      console.log('[Getters]-getArticles');
      return (subId) => {
        const subreddit = state.posts.find(el => el.sub == subId);
        if (subreddit) {
          return subreddit.articles;
        }
      };
    },
  },
};
