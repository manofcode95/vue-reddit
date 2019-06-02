<template>
  <v-toolbar app clipped-left flat color="white" class="nav">
    <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!isLoggedIn" flat @click="login">Log In</v-btn>
      <v-btn v-if="isLoggedIn" flat>
        <v-avatar class="mr-3">
          <img :src="getUser.img" alt="avatar">
        </v-avatar>
        <span>{{getUser.name}}</span>
      </v-btn>
      <v-btn v-if="isLoggedIn" flat @click="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapState, mapGetters } = createNamespacedHelpers("auth");

export default {
  data() {
    return {};
  },
  props: {
    toggleDrawer: {
      type: Function,
      required: true
    }
  },
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: {
    ...mapState(["isLoggedIn"]),
    ...mapGetters(["getUser"])
  }
};
</script>
<style>
.nav {
  border-bottom: 1px solid gray;
}
</style>
