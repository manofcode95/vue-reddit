<template>
  <div>
    <h1>subreddits</h1>
    <ul v-for="sub in subreddits" :key="sub.key">
      <li>{{sub}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    subreddits() {
      return this.$store.getters["subreddits/getSubs"];
    }
  },
  methods: {
    ...mapActions("subreddits", ["init"])
  },
  mounted() {
    this.init();
  }
};
</script>
<style>
</style>
