<template>
  <v-container>
    <h1>{{$route.params.subreddit}}</h1>
    <v-form @submit.prevent="onSubmitPost">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field v-model="title" :counter="20" label="Title" required></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field v-model="url" label="URL"></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-textarea
              v-model="description"
              label="Description"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
          </v-flex>

          <v-flex xs12>
            <v-btn type="submit" class="success" v-model="description">Submit</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    {{articles}}
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: 'Hey yo',
      description:
        'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
      url: '',
    };
  },
  computed: {
    subId() {
      return this.$store.getters['subreddits/getSubId'](
        this.$route.params.subreddit,
      );
    },
    articles() {
      return this.$store.getters['subreddit/getArticles'](this.subId);
    },
  },
  methods: {
    ...mapActions('subreddit', ['submitPost']),
    onSubmitPost() {
      const post = {
        sub_id: this.subId,
        title: this.title,
        description: this.description,
        url: this.url,
      };
      this.submitPost(post);
    },
  },
  mounted() {
    this.$store.dispatch('subreddit/initPosts', this.subId);
  },
};
</script>
<style>
</style>
