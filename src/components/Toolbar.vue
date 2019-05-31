<template>
  <v-toolbar app clipped-left flat color="white" class="nav">
    <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    toggleDrawer: {
      type: Function,
      required: true,
    },
  },
};
</script>
<style>
.nav {
  border-bottom: 1px solid gray;
}
</style>
