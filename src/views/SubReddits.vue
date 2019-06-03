<template>
  <v-container>
    <h1>General</h1>

    <v-list v-if="subreddits.length>0" class="success white--text">
      <v-list-tile
        v-for="sub in subreddits"
        :key="sub.id"
        avatar
        :to="{name:'subreddit', params:{subreddit : sub.name}}"
      >
        <v-list-tile-content>
          <v-list-tile-title v-text="sub.name" class="text-capitalize"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    subreddits() {
      return this.$store.getters['subreddits/getSubs'];
    },
  },
  methods: {
    ...mapActions('subreddits', ['initSubreddits']),
  },
  mounted() {
    this.initSubreddits();
  },
};
</script>
<style>
</style>
